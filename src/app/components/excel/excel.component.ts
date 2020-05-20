import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  title = 'app';
  public progress: number;
  public message: string;
  public excelData;
  constructor(private http: HttpClient) { }
  data = [];
  validFileExtensions = [".xlsx" ];  
  onFileChange(evt: any) {
    //debugger
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length == 1) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        console.log(wb);
        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        /* save data */
        this.data = <any>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      };
      reader.readAsBinaryString(target.files[0]);
    }
  }

  uploadfile() {
    let keys = this.data.shift();
    let resArr = this.data.map((e) => {
      let obj = {};
      keys.forEach((key, i) => {
        obj[key] = e[i];
      });
      return obj;
    });
    
    this.excelData = resArr;
    console.log(this.excelData);
    localStorage.clear();
    localStorage.setItem('exceldata',this.excelData);
    console.log(JSON.parse(localStorage.getItem('exceldata')));
  }

  ngOnInit() {
    console.log(this.excelData);
    
  }

}







// interface ExcelData {
//   [index: number]: { Id: number; Name: string; Email: string, Mobile: string };
// }