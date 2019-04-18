import { Component, OnInit } from "@angular/core";
import { Post } from "./post";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { ActivatedRoute } from "@angular/router";
import { AlertifyService } from "../services/alertify.service";
import { PostService } from './post.service';
import { UserService } from './services/user.service';

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
  providers: [PostService, UserService]
})
export class PostComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private postService: PostService,
    private userService: UserService
  ) {}

  path: string = "https://jsonplaceholder.typicode.com/";

  posts: Post[];
  users: User[];
  today = new Date();

  ngOnInit() {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userid"]);
    }); // aktif olan route bilgilerini alma
  }

  getPosts(userid) {
    this.postService.getPosts(userid).subscribe(data=>{
      this.posts = data;
    })
  }

  getUsers() {
    this.userService.getUsers().subscribe(data=>{
      this.users = data;
    })
  }

  likePost(post) {
    this.alertifyService.success("Liked!");
  }
}
