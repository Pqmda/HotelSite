# 🏨 CZARINA — Luxury Hotel Experience & Automation Engine

> A high-performance, motion-driven luxury hotel frontend built with **React, Vite, Tailwind CSS, and GSAP**, paired with an asynchronous **n8n workflow automation pipeline** for priority inquiry routing.

[![Live Demo](https://img.shields.io/badge/Live_Demo-czarina.vercel.app-000000?style=for-the-badge&logo=vercel)](https://czarina.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React_%7C_GSAP_%7C_n8n-blue?style=for-the-badge)](https://github.com/Pqmda/HotelSite)

---

## 📸 Visual Showcase & Architecture

### 1. High-Performance Motion UI
*Interactive layout reveals, continuous smooth scrolling with GSAP/Lenis, and responsive hotel showcase.*

![Frontend UI Demo](./assets/demo.gif)

https://github.com/user-attachments/assets/ff00f794-3a42-4ae0-8926-23d45ba6cb1a


https://github.com/user-attachments/assets/9d45b06e-731e-46af-9b5b-5e9e7bf8e28a


---

### 2. Automated Inquiry & Priority Pipeline
*Asynchronous booking/inquiry handling with custom priority routing.*

![n8n Workflow Execution](./assets/n8n-workflow-screenshot.png)
<img width="1556" height="565" alt="image" src="https://github.com/user-attachments/assets/1b8bba1e-9c61-4f6f-b4c4-2a4b120207db" />
<img width="1740" height="793" alt="image" src="https://github.com/user-attachments/assets/f0f625ae-cc03-476d-a2fc-969575555c5d" />
<img width="1850" height="994" alt="image" src="https://github.com/user-attachments/assets/a38051fc-72f3-4c47-8a62-124481ed676a" />
<img width="1852" height="597" alt="image" src="https://github.com/user-attachments/assets/f4432e39-03ca-4314-ad86-e04d7050c8e5" />


<img width="1861" height="708" alt="image" src="https://github.com/user-attachments/assets/a0c510ef-54ce-410b-868a-5230c739e10f" />


> **⚙️ Backend Architecture Note:**  
> The **n8n automation instance is self-hosted locally** and triggered via webhooks. While live public form submissions on the Vercel demo site will not execute live backend requests when the local server is offline, the full payload routing logic and execution logs are fully documented above.

---

## ✨ Key Technical Features

- **60 FPS Motion & Smooth Scroll:** Engineered using GSAP animations, Lenis smooth scrolling, and Tailwind CSS layout design.
- **Priority-Based Workflow Automation:** Built a self-hosted n8n pipeline that receives frontend webhooks, evaluates urgency/type of inquiry, and conditionally routes high-priority requests to instant alert channels while logging standard inquiries.
- **Dynamic State Management:** Optimized React render cycles for seamless interactive booking/inquiry form handling.
- **Production Deployment:** Deployed frontend on Vercel with clean repository setup and environment management.

---

## 🛠️ Tech Stack & Systems

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | React (Vite), JavaScript (ES6+) |
| **Styling & Motion** | Tailwind CSS, GSAP, Lenis Smooth Scroll |
| **Automation / Backend** | n8n (Self-Hosted), REST APIs, Webhooks |
| **Deployment & Ops** | Vercel, Git / GitHub |

---

## ⚙️ Local Setup & Run Guide

To run the frontend locally on your machine:

```bash
# 1. Clone the repository
git clone [https://github.com/Pqmda/HotelSite.git](https://github.com/Pqmda/HotelSite.git)

# 2. Navigate into the directory
cd HotelSite

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
