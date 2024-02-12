import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  departments: any[]= [];
  employeeList: any[]=[];
  isListView: boolean = true;
  employeeObject: any ={
    "firstName":"",
    "lastName": "", 
    "departmentId": "",
    "gender":"",
    "email":"",
    "phoneNo":""
  }
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
  }

  loadDepartments() {
    this.http.get("assets/departments.json").subscribe((res:any)=>{ 
      this.departments =  res.data;
    })
  }

  loadEmployees() {
    this.http.get("assets/getEmployee.json").subscribe((res: any)=>{
      
      this.employeeList = res.data;
    })
  }

  onCreateEmp() {
    console.log(this.employeeObject);
    
     this.employeeList.push(this.employeeObject);
     this.isListView = false;
  }

  onEdit(item: any) { 
    this.employeeObject = item;
    this.isListView = false;
  }
  onDelete(item: any) {

  }
}