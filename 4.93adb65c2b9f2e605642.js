(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{m8Z0:function(e,t,r){"use strict";r.r(t),r.d(t,"DeliveryModule",(function(){return L}));var i=r("ofXK"),s=r("3Pt+"),d=r("fXoL"),a=r("CVMR"),o=r("tyNb"),n=r("VJCk");function b(e,t){1&e&&(d.Mb(0,"h3",7),d.mc(1,"Add Delivery Address"),d.Lb())}function l(e,t){if(1&e&&(d.Mb(0,"option",21),d.mc(1),d.Lb()),2&e){const e=t.$implicit;d.Yb("value",e),d.xb(1),d.nc(e)}}let c=(()=>{class e{constructor(e,t,r,i,s){this.render=e,this.service=t,this.route=r,this.router=i,this.fmlService=s,this.pincode=[],this.addmode=!1,this.editmode=!1,this.editData={}}ngOnInit(){this.addressForm=new s.f({firstName:new s.d("",s.q.required),lastName:new s.d(""),phoneNumber:new s.d("",s.q.required),email:new s.d("",[s.q.required,s.q.email]),locality:new s.d("",s.q.required),flatNo:new s.d("",s.q.required),landmark:new s.d("",s.q.required)}),this.addAddress(),this.fn_editMode(),this.pincode=this.fmlService.getOutlet(+JSON.parse(localStorage.getItem("locality")))}onSubmit(){const e={address:this.addressForm.value};console.log(this.addressForm.value),this.addressForm.valid?this.editmode?this.service.editAddress({address:this.addressForm.value,oldFlatNo:this.previousFlatNo}).subscribe(e=>{this.route.navigate(["/delivery/SelectDeliveryAddress"])}):this.service.addAddress(e).subscribe(e=>{localStorage.setItem("address",JSON.stringify(this.addressForm.value)),this.route.navigate(["/cart"])}):document.querySelectorAll(".ng-invalid").forEach(e=>{this.render.addClass(e,"submit")})}addAddress(){this.router.queryParamMap.subscribe(e=>{this.addmode="true"===e.get("addAddress")})}formSetValue(e){this.addressForm.patchValue({firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber,email:e.email,locality:e.locality,flatNo:e.flatNo,landmark:e.landmark})}fn_editMode(){this.router.queryParams.subscribe(e=>{this.service.getAddress().subscribe(t=>{t.data.forEach(t=>{t.flatNo===e.flatNo&&(this.formSetValue(t),this.editmode=e.editMode,this.previousFlatNo=e.flatNo)})})})}}return e.\u0275fac=function(t){return new(t||e)(d.Hb(d.D),d.Hb(a.a),d.Hb(o.c),d.Hb(o.a),d.Hb(n.a))},e.\u0275cmp=d.Bb({type:e,selectors:[["app-address"]],decls:33,vars:3,consts:[[1,"address-container"],[1,"container"],[1,"row"],[1,"col-12"],["class","heading2",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"heading2"],[3,"formGroup","ngSubmit"],[1,"input"],["type","text","placeholder","First Name","formControlName","firstName",1,"control"],["type","text","placeholder","Last Name","formControlName","lastName",1,"control"],["type","text","placeholder","Enter 10-digit mobile number","formControlName","phoneNumber",1,"control"],["type","text","placeholder","Enter your email address","formControlName","email",1,"control"],[1,"address"],["name","locality","id","","formControlName","locality",1,"control"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","placeholder","Flat, House no, Building, etc.","formControlName","flatNo",1,"control"],["type","text","placeholder","Street, Colony, Landmark","formControlName","landmark",1,"control"],["type","submit",1,"theme-btn"],[3,"value"]],template:function(e,t){1&e&&(d.Mb(0,"div",0),d.Mb(1,"div",1),d.Mb(2,"div",2),d.Mb(3,"div",3),d.lc(4,b,2,0,"h3",4),d.Mb(5,"div",5),d.Mb(6,"div",6),d.Mb(7,"h1",7),d.mc(8,"detail"),d.Lb(),d.Mb(9,"form",8),d.Tb("ngSubmit",(function(){return t.onSubmit()})),d.Mb(10,"div",9),d.Ib(11,"input",10),d.Lb(),d.Mb(12,"div",9),d.Ib(13,"input",11),d.Lb(),d.Mb(14,"div",9),d.Ib(15,"input",12),d.Lb(),d.Mb(16,"div",9),d.Ib(17,"input",13),d.Lb(),d.Mb(18,"h1",7),d.mc(19,"address"),d.Lb(),d.Mb(20,"div",14),d.Mb(21,"div",9),d.Mb(22,"select",15),d.Mb(23,"option",16),d.mc(24,"Select a area"),d.Lb(),d.lc(25,l,2,2,"option",17),d.Lb(),d.Lb(),d.Mb(26,"div",9),d.Ib(27,"input",18),d.Lb(),d.Mb(28,"div",9),d.Ib(29,"input",19),d.Lb(),d.Lb(),d.Mb(30,"div",9),d.Mb(31,"button",20),d.mc(32,"Save And Continue"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&e&&(d.xb(4),d.Yb("ngIf",t.addmode),d.xb(5),d.Yb("formGroup",t.addressForm),d.xb(16),d.Yb("ngForOf",t.pincode))},directives:[i.k,s.s,s.j,s.g,s.c,s.i,s.e,s.p,s.m,s.r,i.j],styles:[""]}),e})();const m=function(e){return{editMode:!0,flatNo:e}};function u(e,t){if(1&e){const e=d.Nb();d.Mb(0,"div",7),d.Mb(1,"div",8),d.Mb(2,"h3",9),d.mc(3),d.Lb(),d.Lb(),d.Mb(4,"div",10),d.Mb(5,"ul"),d.Mb(6,"li"),d.Mb(7,"small"),d.mc(8),d.Lb(),d.Lb(),d.Mb(9,"li"),d.Mb(10,"small"),d.mc(11),d.Lb(),d.Lb(),d.Mb(12,"li"),d.Mb(13,"small"),d.mc(14),d.Lb(),d.Lb(),d.Lb(),d.Mb(15,"div",2),d.Mb(16,"div",11),d.Mb(17,"button",12),d.Tb("click",(function(){d.hc(e);const r=t.$implicit;return d.Vb().deliverAddress(r)})),d.mc(18,"Deliver Here"),d.Lb(),d.Lb(),d.Mb(19,"div",13),d.Mb(20,"button",14),d.Tb("click",(function(){d.hc(e);const r=t.$implicit;return d.Vb().editAddress(r)})),d.mc(21,"edit"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb()}if(2&e){const e=t.$implicit;d.xb(3),d.pc("",e.firstName," ",e.lastName,""),d.xb(5),d.nc(e.flatNo),d.xb(3),d.nc(e.landmark),d.xb(3),d.nc(e.locality),d.xb(6),d.Yb("queryParams",d.ac(6,m,e.flatNo))}}const h=function(){return{addAddress:!0}};let v=(()=>{class e{constructor(e,t){this.service=e,this.route=t,this.addressList=[]}ngOnInit(){this.service.getAddress().subscribe(e=>{this.addressList=e.data})}deliverAddress(e){localStorage.setItem("address",JSON.stringify(e)),this.route.navigate(["/cart"])}editAddress(e){console.log(e)}}return e.\u0275fac=function(t){return new(t||e)(d.Hb(a.a),d.Hb(o.c))},e.\u0275cmp=d.Bb({type:e,selectors:[["app-address-list"]],decls:9,vars:3,consts:[[1,"addressList"],[1,"container"],[1,"row"],[1,"col-12"],[1,"heading2","my-3"],["class","card my-3",4,"ngFor","ngForOf"],["routerLink","/delivery/address",1,"theme-btn","addNew",3,"queryParams"],[1,"card","my-3"],[1,"card-header","bg-transparent"],[1,"heading2"],[1,"card-body"],[1,"col-7"],[1,"theme-btn",3,"click"],[1,"col-5"],["routerLink","/delivery/address",1,"theme-btn",3,"queryParams","click"]],template:function(e,t){1&e&&(d.Mb(0,"section",0),d.Mb(1,"div",1),d.Mb(2,"div",2),d.Mb(3,"div",3),d.Mb(4,"h3",4),d.mc(5,"Select Delivery Address"),d.Lb(),d.lc(6,u,22,8,"div",5),d.Mb(7,"button",6),d.mc(8,"Add New Address"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&e&&(d.xb(6),d.Yb("ngForOf",t.addressList),d.xb(1),d.Yb("queryParams",d.Zb(2,h)))},directives:[i.j,o.d],styles:[""]}),e})();var f=r("QllS");const p=[{path:"",redirectTo:"address",canActivate:[f.a]},{path:"address",component:c,canActivate:[f.a]},{path:"SelectDeliveryAddress",component:v,canActivate:[f.a]}];let L=(()=>{class e{}return e.\u0275mod=d.Fb({type:e}),e.\u0275inj=d.Eb({factory:function(t){return new(t||e)},imports:[[i.b,s.n,o.f.forChild(p)]]}),e})()}}]);