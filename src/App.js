import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import ForgotPass from './home/ForgotPass';
import MainAdmin from './admin/MainAdmin';
import NavBar from './admin/NavBar';
import Sidebar from './admin/Sidebar';
import Footer from './admin/Footer';
import Dashboard from './admin/Dashboard';
import AddBranch from './admin/AddBranch';
import ViewBranch from './admin/ViewBranch';
import AddEmployee from './admin/AddEmployee';
import ViewEmployee from './admin/ViewEmployee';
import ViewEmpB1 from './admin/ViewEmpB1';
import ViewAdvance from './admin/ViewAdvance';
import ViewAdvA1 from './admin/ViewAdvA1';
import TransactionEmp from './admin/TransactionEmp';
import TransactionBranch from './admin/TransactionBranch';
import TransactionEmpData from './admin/TransactionEmpData';
import TransactionBranchData from './admin/TransactionBranchData';
import LeaveReport from './admin/LeaveReport';
import LeaveReportData from './admin/LeaveReportData';
import Salary from './admin/Salary';
import SalaryData from './admin/SalaryData';
import AddIncentive from './admin/AddIncentive';
import AddIncentiveRules from './admin/AddIncentiveRules';
import ViewIncentive from './admin/ViewIncentive';
import ViewIncentiveRules from './admin/ViewIncentiveRules';

import MainManager from './manager/MainManager';
import NavbarM from './manager/NavbarM';
import SidebarM from './manager/SidebarM';
import FooterM from './manager/FooterM';
import DashboardM from './manager/DashboardM';
import AddTransactionM from './manager/AddTransactionM';
import ViewTransactionM from './manager/ViewTransactionM';
import TransactionDataM from './manager/TransactionDataM';
import AddAdvanceM from './manager/AddAdvanceM';
import ViewAdvanceM from './manager/ViewAdvanceM';
import AdvanceDataM from './manager/AdvanceDataM';
import AddLeaveM from './manager/AddLeaveM';
import LeaveReportM from './manager/LeaveReportM';
import LeaveReportDataM from './manager/LeaveReportDataM';
import SalaryM from './manager/SalaryM';
import SalaryDataM from './manager/SalaryDataM';
import TansactionDataDatewiseM from './manager/TansactionDataDatewiseM';

function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      {/* login */}
      <Route path="/" element={<Home/>}/>

      {/* Admin */}
      <Route path="mainAdmin" element={<MainAdmin/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="navBar" element={<NavBar/>}/>
      <Route path="sidebar" element={<Sidebar/>}/>
      <Route path="footer" element={<Footer/>}/>
      <Route path="addBranch" element={<AddBranch/>}/>
      <Route path="viewBranch" element={<ViewBranch/>}/>
      <Route path="addEmployee" element={<AddEmployee/>}/>
      <Route path="addIncentive" element={<AddIncentive/>}/>
      <Route path="addIncentiveRules" element={<AddIncentiveRules/>}/>
      <Route path="viewIncentive" element={<ViewIncentive/>}/>
      <Route path="viewIncentiveRules" element={<ViewIncentiveRules/>}/>
      <Route path="forgotPass" element={<ForgotPass/>}/>
      <Route path="salary" element={<Salary/>}>
      <Route path="salaryData" element={<SalaryData/>}/>
      </Route>
      <Route path="leaveReport" element={<LeaveReport/>}>
      <Route path="leaveReportData" element={<LeaveReportData/>}/>
      </Route>
      <Route path="transactionEmp" element={<TransactionEmp/>}>
      <Route path="transactionEmpData" element={<TransactionEmpData/>}/>
      </Route>
      <Route path="transactionBranch" element={<TransactionBranch/>}>
      <Route path="transactionBranchData" element={<TransactionBranchData/>}/>
      </Route>
      <Route path="viewEmployee" element={<ViewEmployee/>}>
      <Route path="viewEmpB1" element={<ViewEmpB1/>}/>
      </Route>
      <Route path="viewAdvance" element={<ViewAdvance/>}>
      <Route path="viewAdvA1" element={<ViewAdvA1/>}/>
      </Route>
      </Route>
      {/* Admin End */}

      {/* Manager */}
      <Route path="mainManager" element={<MainManager/>}>
      <Route index element={<DashboardM/>}/>
      <Route path="navbarM" element={<NavbarM/>}/>
      <Route path="sidebarM" element={<SidebarM/>}/>
      <Route path="footerM" element={<FooterM/>}/>
      <Route path="addTransactionM" element={<AddTransactionM/>}/>
      <Route path="viewTransactionM" element={<ViewTransactionM/>}>
      <Route path="transactionDataM" element={<TransactionDataM/>}>
      <Route path="tansactionDataDatewiseM" element={<TansactionDataDatewiseM/>}/>
      </Route>
      </Route>
      <Route path="addAdvanceM" element={<AddAdvanceM/>}/>
      <Route path="viewAdvanceM" element={<ViewAdvanceM/>}>
      <Route path="advanceDataM" element={<AdvanceDataM/>}/>
      </Route>
      <Route path="addLeaveM" element={<AddLeaveM/>}/>
      <Route path="leaveReportM" element={<LeaveReportM/>}>
      <Route path="leaveReportDataM" element={<LeaveReportDataM/>}/>
      </Route>
      <Route path="salaryM" element={<SalaryM/>}>
      <Route path="salaryDataM" element={<SalaryDataM/>}/>
      </Route>
      </Route>
       {/* Manager End */}

    </Routes>

   </BrowserRouter>
   </>
  );
}

export default App;
