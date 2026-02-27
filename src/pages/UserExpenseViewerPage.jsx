// import React, { useEffect, useState } from "react";
// import axios from "../utils/axios";
// import dayjs from "dayjs";
// import NormalExpenseTableReadOnly from "../components/expense/NormalExpenseTableReadOnly";
// import OtherExpenseTableReadOnly from "../components/expense/OtherExpenseTableReadOnly";
// import AppLayout from "../layouts/AppLayout";

// export default function UserExpenseViewerPage() {
//   const current = dayjs();

//   const [selectedMonth, setSelectedMonth] = useState({
//     month: current.month() + 1,
//     year: current.year(),
//   });

//   const [normalExpenses, setNormalExpenses] = useState([]);
//   const [otherExpenses, setOtherExpenses] = useState([]);
//   const [hq, setHq] = useState("-");
//   const [userInfo, setUserInfo] = useState(null);

//   const monthOptions = [
//     current,
//     current.subtract(1, "month"),
//     current.subtract(2, "month"),
//   ].map((d) => ({
//     label: d.format("MMMM YYYY"),
//     value: { month: d.month() + 1, year: d.year() },
//   }));

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { month, year } = selectedMonth;

//         const startDate = dayjs(`${year}-${month}-01`)
//           .startOf("month")
//           .format("YYYY-MM-DD");

//         const endDate = dayjs(`${year}-${month}-01`)
//           .endOf("month")
//           .format("YYYY-MM-DD");

//         const { data } = await axios.get(
//           `/expense/my?startDate=${startDate}&endDate=${endDate}`
//         );

//         setNormalExpenses(data.normalExpenses || []);
//         setOtherExpenses(data.otherExpenses || []);

//         const userRes = await axios.get("/users/me");
//         setUserInfo(userRes.data);

//         const hqRes = await axios.get("/src/hq/me");
//         setHq(hqRes.data?.placeOfWork || "-");
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, [selectedMonth]);

//   const subtotalNormal = normalExpenses.reduce(
//     (sum, e) => sum + (e.total || 0),
//     0
//   );

//   const subtotalOther = otherExpenses.reduce(
//     (sum, e) => sum + (e.total || 0),
//     0
//   );

//   const grandTotal = subtotalNormal + subtotalOther;

//   return (
//     <AppLayout title="My Expense Statement" backTo="/dashboard">
//       <div className="bg-white p-6 rounded-lg shadow mb-6">
//         <h2 className="text-xl font-bold text-blue-900">
//           {userInfo?.username || "Loading..."}
//         </h2>

//         <div className="mt-2 text-sm text-gray-700 space-y-1">
//           <div>
//             <span className="font-semibold">User ID:</span>{" "}
//             {userInfo?.userId || "-"}
//           </div>
//           <div>
//             <span className="font-semibold">HQ:</span> {hq}
//           </div>
//         </div>

//         <div className="mt-3">
//           <label className="mr-2 font-medium">Month:</label>
//           <select
//             value={`${selectedMonth.month}-${selectedMonth.year}`}
//             onChange={(e) => {
//               const [m, y] = e.target.value.split("-").map(Number);
//               setSelectedMonth({ month: m, year: y });
//             }}
//             className="border px-2 py-1 rounded"
//           >
//             {monthOptions.map((opt) => (
//               <option
//                 key={`${opt.value.month}-${opt.value.year}`}
//                 value={`${opt.value.month}-${opt.value.year}`}
//               >
//                 {opt.label}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* NORMAL */}
//       <div className="bg-white p-4 rounded-lg shadow mb-6">
//         <h3 className="font-bold text-lg mb-3 text-blue-900">
//           Normal Expenses
//         </h3>

//         <NormalExpenseTableReadOnly expenses={normalExpenses} />

//         <div className="text-right mt-3 font-semibold">
//           Subtotal 1: ₹ {subtotalNormal.toLocaleString("en-IN")}
//         </div>
//       </div>

//       {/* OTHER */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="font-bold text-lg mb-3 text-blue-900">
//           Other Expenses
//         </h3>

//         <OtherExpenseTableReadOnly expenses={otherExpenses} />

//         <div className="text-right mt-3 font-semibold">
//           Subtotal 2: ₹ {subtotalOther.toLocaleString("en-IN")}
//         </div>
//       </div>

//       <div className="mt-6 text-center">
//         <h2 className="text-xl font-bold text-green-600">
//           Grand Total: ₹ {grandTotal.toLocaleString("en-IN")}
//         </h2>
//       </div>
//     </AppLayout>
//   );
// }









import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import dayjs from "dayjs";
import NormalExpenseTableReadOnly from "../components/expense/NormalExpenseTableReadOnly";
import OtherExpenseTableReadOnly from "../components/expense/OtherExpenseTableReadOnly";
import AppLayout from "../layouts/AppLayout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useRef } from "react";


const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

export default function UserExpenseViewerPage() {
  const current = dayjs();

  const [selectedMonth, setSelectedMonth] = useState({
    month: current.month() + 1,
    year: current.year(),
  });

  const [normalExpenses, setNormalExpenses] = useState([]);
  const [otherExpenses, setOtherExpenses] = useState([]);
  const [hq, setHq] = useState("-");
  const [userInfo, setUserInfo] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState(null);
  const [loadingApproval, setLoadingApproval] = useState(false);
  const contentRef = useRef();

  const isCurrentMonth =
  selectedMonth.month === current.month() + 1 &&
  selectedMonth.year === current.year();

const isPreviousMonth =
  selectedMonth.month === current.subtract(1, "month").month() + 1 &&
  selectedMonth.year === current.subtract(1, "month").year();


  const monthOptions = [
    current,
    current.subtract(1, "month"),
    current.subtract(2, "month"),
  ].map((d) => ({
    label: d.format("MMMM YYYY"),
    value: { month: d.month() + 1, year: d.year() },
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { month, year } = selectedMonth;

        const startDate = dayjs(`${year}-${month}-01`)
          .startOf("month")
          .format("YYYY-MM-DD");

        const endDate = dayjs(`${year}-${month}-01`)
          .endOf("month")
          .format("YYYY-MM-DD");

        const { data } = await axios.get(
          `/expense/my?startDate=${startDate}&endDate=${endDate}`
        );

        setNormalExpenses(data.normalExpenses || []);
        setOtherExpenses(data.otherExpenses || []);

        const userRes = await axios.get("/users/me");
        setUserInfo(userRes.data);

        const hqRes = await axios.get("/src/hq/me");
        setHq(hqRes.data?.placeOfWork || "-");

        // 🔥 Fetch approvals
        const approvalRes = await axios.get("/approvals/me");

        const selectedMonthCode = MONTHS[month - 1];

        const thisMonthApproval = approvalRes.data.find(
          (a) => a.month === selectedMonthCode
        );

        setApprovalStatus(thisMonthApproval || null);

      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [selectedMonth]);

  const subtotalNormal = normalExpenses.reduce(
    (sum, e) => sum + (e.total || 0),
    0
  );

  const subtotalOther = otherExpenses.reduce(
    (sum, e) => sum + (e.total || 0),
    0
  );

  const grandTotal = subtotalNormal + subtotalOther;

  const handleSubmitApproval = async () => {
    try {
      setLoadingApproval(true);

      const monthCode = MONTHS[selectedMonth.month - 1];

      await axios.post("/approvals/submit", {
        month: monthCode,
      });

      setApprovalStatus((prev) => ({
        ...prev,
        approvedByUser: true,
      }));

      alert("Month submitted successfully!");

    } catch (err) {
      alert(err.response?.data?.message || "Error submitting approval");
    } finally {
      setLoadingApproval(false);
    }
  };

  const isApproved = approvalStatus?.approvedByUser;

  const handleDownloadPDF = async () => {
  const element = contentRef.current;

  const canvas = await html2canvas(element, {
    scale: 1.5,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.7);

  const pdf = new jsPDF("p", "mm", "a4");

  const imgWidth = 210;
  const pageHeight = 295;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save("MyExpenseStatement.pdf");
};

const handleDownloadExcel = () => {
  const combinedData = [
    ...normalExpenses.map((e) => ({
      Type: "Normal",
      Date: dayjs(e.date).format("DD/MM/YYYY"),
      WorkType: e.workType,
      Place: e.placeOfWork,
      Station: e.station,
      KMs: e.kms,
      MOT: e.MOT,
      TA: e.TA,
      ExtraTA: e.ExtraTA,
      DA: e.DA,
      ExtraDA: e.ExtraDA,
      Total: e.total,
    })),
    ...otherExpenses.map((e) => ({
      Type: "Other",
      Date: dayjs(e.date).format("DD/MM/YYYY"),
      Description: e.description,
      Amount: e.amount,
      ExtraAmount: e.extraAmount,
      Total: e.total,
    })),
  ];

  const worksheet = XLSX.utils.json_to_sheet(combinedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const data = new Blob([excelBuffer], {
    type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(data, "MyExpenseStatement.xlsx");
};


  return (
    <AppLayout title="My Expense Statement" backTo="/executive-dashboard">
        <div ref={contentRef}>

          <div className="bg-white p-6 rounded-lg shadow mb-6 flex justify-between items-start">
  {/* LEFT SIDE */}
  <div>
    <h2 className="text-xl font-bold text-blue-900">
      {userInfo?.username || "Loading..."}
    </h2>

    <div className="mt-2 text-sm text-gray-700 space-y-1">
      <div>
        <span className="font-semibold">User ID:</span>{" "}
        {userInfo?.userId || "-"}
      </div>
      <div>
        <span className="font-semibold">HQ:</span> {hq}
      </div>
      <div className="flex gap-6">
  <div>
    <span className="font-semibold">NW Days:</span>{" "}
    {approvalStatus?.NWdays ?? 0}
  </div>

  <div>
    <span className="font-semibold">TR Days:</span>{" "}
    {approvalStatus?.TR ?? 0}
  </div>
</div>
      {/* <div>
  <span className="font-semibold">NW Days:</span>{" "}
  {approvalStatus?.NWdays ?? 0}
</div> */}

    </div>

    <div className="mt-3">
      <label className="mr-2 font-medium">Month:</label>
      <select
        value={`${selectedMonth.month}-${selectedMonth.year}`}
        onChange={(e) => {
          const [m, y] = e.target.value.split("-").map(Number);
          setSelectedMonth({ month: m, year: y });
        }}
        className="border px-2 py-1 rounded"
      >
        {monthOptions.map((opt) => (
          <option
            key={`${opt.value.month}-${opt.value.year}`}
            value={`${opt.value.month}-${opt.value.year}`}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* RIGHT SIDE BUTTONS */}
  <div className="flex gap-3">
    <button
      onClick={handleDownloadPDF}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
    >
      PDF
    </button>

    <button
      onClick={handleDownloadExcel}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold"
    >
      Excel
    </button>
  </div>
</div>

      {/* NORMAL */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-bold text-lg mb-3 text-blue-900">
          Normal Expenses
        </h3>

        <NormalExpenseTableReadOnly expenses={normalExpenses} />

        <div className="text-right mt-3 font-semibold">
          Subtotal 1: ₹ {subtotalNormal.toLocaleString("en-IN")}
        </div>
      </div>

      {/* OTHER */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold text-lg mb-3 text-blue-900">
          Other Expenses
        </h3>

        <OtherExpenseTableReadOnly expenses={otherExpenses} />

        <div className="text-right mt-3 font-semibold">
          Subtotal 2: ₹ {subtotalOther.toLocaleString("en-IN")}
        </div>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-xl font-bold text-green-600">
          Grand Total: ₹ {grandTotal.toLocaleString("en-IN")}
        </h2>

        {/* 🔥 APPROVAL BUTTON */}
        <div className="mt-4">
          {/* {isApproved ? (
            <div className="text-green-600 font-semibold">
              ✅ Submitted for Approval
            </div>
          ) : (
            <button
              onClick={handleSubmitApproval}
              disabled={loadingApproval}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow disabled:opacity-50"
            >
              {loadingApproval ? "Submitting..." : "Submit for Approval"}
            </button>
          )} */}
          {isApproved ? (
  <div className="text-green-600 font-semibold">
    ✅ Submitted for Approval
  </div>
) : (
  <button
    onClick={handleSubmitApproval}
    disabled={loadingApproval || !isPreviousMonth}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {loadingApproval ? "Submitting..." : "Submit for Approval"}
  </button>
)}
        </div>
      </div>
        </div>

    </AppLayout>
  );
}
