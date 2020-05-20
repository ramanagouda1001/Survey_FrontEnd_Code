import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-check',
  templateUrl: './image-check.component.html',
  styleUrls: ['./image-check.component.css']
})
export class ImageCheckComponent implements OnInit {
  public images:any[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getimages();
  }
  url: string = "http://10.10.12.181:8080/tyss";
  getimages(){
    console.log("ghjguy");
    this.http.get(`${this.url}/images`).subscribe((res: any) => {
      console.log(res);
      this.images=res;

      console.log(res);
    });
  }
}
