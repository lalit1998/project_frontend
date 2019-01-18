import { Routes,RouterModule, ChildActivationStart } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RepairComponent } from './repair/repair.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BillComponent } from './bill/bill.component';
import { AddbillComponent } from './addbill/addbill.component';
import { billdetail } from './classes/billdetails';
import { BilldetailComponent } from './billdetail/billdetail.component';
import { Component, ViewChildren } from '@angular/core';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { UserComponent } from './user/user.component';
import { AdminupdateComponent } from './adminupdate/adminupdate.component';
import { MenuComponent } from './menu/menu.component';
import { RepairorderComponent } from './repairorder/repairorder.component';
import { RepairupdateComponent } from './repairupdate/repairupdate.component';


const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,children:[

  {path:' ',component:HomepageComponent},
  {path:'product',component:ProductComponent},
  {path:'category',component:CategoryComponent},
  {path:'updatecat/:cat_id',component:UpdateCategoryComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'updateproduct/:pro_id',component:UpdateproductComponent},
  {path:'order',component:OrderComponent},
  {path:'repair',component:RepairComponent},
  {path:'forget',component:ForgetpasswordComponent},
  {path:'bill',component:BillComponent},
  {path:'addbill',component:AddbillComponent},
  {path:'billdetails/:bill_id',component:BilldetailComponent},
  {path:'editprofile/:user_id',component:UserupdateComponent},
  {path:'adminprofile',component:AdminprofileComponent},
  {path:'manageuser',component:ManageuserComponent},
  {path:'user',component:UserComponent},
  {path:'adminupdate',component:AdminupdateComponent},
  {path:'repairorder',component:RepairorderComponent},
  {path:'updaterepair/:repair_id',component:RepairupdateComponent}
  ]},
];

export const routing= RouterModule.forRoot(arr);
