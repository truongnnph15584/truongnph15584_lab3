import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users =
  [
    {
      id: 1,
      name: 'anhba1',
      cannang: 30,
      chieucao: 150,
      avt: 'https://kenh14cdn.com/thumb_w/600/2020/8/8/ba-ga-news-1-1596892491163685017002-crop-1596892506700962456041.jpg'
    },
    {
      id: 2,
      name: 'anhba2',
      cannang: 30,
      chieucao: 170,
      avt: 'https://kenh14cdn.com/thumb_w/600/2020/8/8/ba-ga-news-1-1596892491163685017002-crop-1596892506700962456041.jpg'
    },
    {
      id: 3,
      name: 'anhba3',
      cannang: 30,
      chieucao: 160,
      avt: 'https://kenh14cdn.com/thumb_w/600/2020/8/8/ba-ga-news-1-1596892491163685017002-crop-1596892506700962456041.jpg'
    },
    {
      id: 4,
      name: 'anhba4',
      cannang: 30,
      chieucao: 180,
      avt: 'https://kenh14cdn.com/thumb_w/600/2020/8/8/ba-ga-news-1-1596892491163685017002-crop-1596892506700962456041.jpg'
    }
  ]
remove(id: number) {
  this.users = this.users.filter(user => {
    if (user.id == id && user.chieucao < 180) {
      return false;
    }
    return true;
  })
  this.users_temp = this.users;
}
// any kiểu dữ liệu bất kỳ
users_temp = this.users;

ojb_temp={
  id: null,
  name:"",
  cannang:null,
  chieucao:null,
  avt:"",
  avt_old:""
}

Search(e: any) {
  this.users_temp = this.users.filter(user =>
    user.name.indexOf(e.target.value.toLowerCase().replace(/\s/g, '')) !== -1
  )
}

submit(data: any) {
  console.log(this.ojb_temp)
  // if (!this.onValidate(data)) {
  //   return;
  // }
   
  // var add_ojb = {
  //   id: Number(this.users.length + 1),
  //   ...data
  // }
  // this.users.push(add_ojb);
  // this.users_temp = this.users
}
update_user(data: any) {
  this.ojb_temp=data
  console.log(this.ojb_temp)
}


onValidate(ojb: any) {
  if (!ojb.name || !ojb.cannang || !ojb.chieucao || !ojb.avt) {
    alert("bạn chưa nhập đủ dữ liệu!")
    return false;
  }
  return true;
}


  
  
}
