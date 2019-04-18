import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"; // httpclient için
import { Routes, RouterModule } from "@angular/router"; // routing işlemleri için
import { FormsModule } from "@angular/forms"; // two way bounding

import { AppComponent } from "./app.component";
import { CustomerComponent } from "./customer/customer.component";
import { NavComponent } from "./nav/nav.component";
import { PostComponent } from "./post/post.component";
import { AlertifyService } from "./services/alertify.service";
import { PostFilterPipe } from "./post/pipes/post-filter.pipe";

const routes: Routes = [
  { path: "posts", component: PostComponent },
  { path: "posts/:userid", component: PostComponent },
  { path: "", redirectTo: "posts", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavComponent,
    PostComponent,
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
