# Blue Pine

*A full-stack MERN application for expense management, attendance tracking, field activity monitoring, and automated TA/DA calculations.*

| Resource | Link |
|----------|------|
| 🌐 Live Demo | https://blue-pine-web.vercel.app/login |
| 🔗 Frontend Repository | https://github.com/nix2205/BluePine-web |
| 🔗 Backend Repository | https://github.com/nix2205/BluePine-server |
| 🎥 Demo Video | https://youtu.be/llMPQUKH5GU |

---

## Overview

Blue Pine is a role-based expense management and field activity tracking platform designed to streamline attendance management, travel expense calculations, location mapping, and reporting for organizations with field operations.

The system automates Travel Allowance (TA) and Daily Allowance (DA) calculations based on user-assigned locations, reducing manual effort while improving accuracy and operational efficiency.

---

## User Roles

Blue Pine follows a hierarchical access model where each higher role inherits the capabilities of lower roles while gaining additional management and monitoring privileges.

### Executive
- Mark attendance
- Submit daily activity logs
- Map locations
- View expense statements
- Track working and non-working days

### Manager
- Access all Executive functionalities
- Manage and supervise assigned executives
- Configure cities and allowances
- Review team activities and reports
- Submit and monitor records visible to higher-level authorities

### Admin
- Access all Manager and Executive functionalities
- Create and manage users
- Configure HQ, EX, and OS locations
- Set TA/DA policies
- Manage organizational settings
- Access organization-wide reports and analytics

## Key Features

- Role-based authentication and authorization
- Flexible organizational hierarchy management
- Attendance management
- Automated TA and DA calculations
- Expense statement generation
- Location mapping system
- Working and non-working day tracking
---

## What Makes Blue Pine Unique?

- Automatic TA/DA calculation based on configured Headquarters (HQ), Ex-Station (EX), and Out-Station (OS) locations
- Flexible hierarchy structure supporting executives, managers, and administrators
- Centralized management of attendance, expenses, and field activities
- Location mapping module for maintaining field coverage records
- End-to-end workflow support for executives, managers, and administrators

---

## Technology Stack

### Frontend
React.js | React Router | Axios | CSS

### Backend
Node.js | Express.js

### Database
MongoDB

### Authentication & Security
JWT Authentication | Role-Based Access Control (RBAC)

---

## Screenshots

### Login Page
<img width="1917" height="880" alt="image" src="https://github.com/user-attachments/assets/2bbb32bf-1679-446d-b717-dc0cc5115ee8" />


### Admin/Manager Dashboard
<img width="1898" height="862" alt="image" src="https://github.com/user-attachments/assets/f46e645b-2b21-4e0b-9b80-8b5b1484221d" />

### Expense Statement
<img width="1901" height="864" alt="image" src="https://github.com/user-attachments/assets/8e6e81d3-77f6-4b84-8dac-911d91037f62" />

### Mapping Module
<img width="1919" height="869" alt="image" src="https://github.com/user-attachments/assets/3001e265-8c38-4a4c-b92e-d3a726d97eb2" />

### User Dashboard
<img width="1893" height="872" alt="image" src="https://github.com/user-attachments/assets/e42215f8-1248-4404-9bb6-734efd02d4a5" />

---

## Future Enhancements

### Visit Matrix Module 

A centralized dashboard currently under development that provides a consolidated monthly report of employee visits and operational updates in a single interface for easier monitoring and analysis.

---

## Developed With

MongoDB • Express.js • React.js • Node.js

## Project Evolution

Blue Pine is the successor to **Pharma Tracker**, an earlier expense tracking and field activity management system. The lessons learned from the first version were used to redesign the platform with a more flexible hierarchy structure, improved automation, enhanced location mapping, and a scalable architecture.

### Previous Version (Pharma Tracker)
- Frontend: https://github.com/nix2205/Project-root-client
- Backend: https://github.com/nix2205/Project-root-server
- Demo Video: https://youtu.be/llMPQUKH5GU
