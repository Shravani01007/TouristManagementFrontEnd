import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import {AuthService} from './services/auth.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { SignUpComponent } from './signUp/sign-up/sign-up.component';
import { RegisterTravelAgentComponent } from './registerTravelAgent/register-travel-agent/register-travel-agent.component';
import { TravelAgentComponent } from './travelAgent/travel-agent/travel-agent.component';
import {RegisterQuideComponent} from './registerQuide/register-quide/register-quide.component';
import {TokenInterceptor} from './token.interceptor';
import { RegisteredPackageComponent } from './registeredPackage/registered-package/registered-package.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RegisterPackageComponent } from './registerPackage/register-package/register-package.component';
import {MatDialogModule} from '@angular/material/dialog';
import {UpdatePackage} from './admin/admin/admin.component';





const routes: Routes = [
  
 {path:'login',component:LoginComponent},
 {path:'' , component: DashboardComponent },
  {path:'ADMIN',component: AdminComponent},
 {path:'USER',component:UserComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'registerTravelAgent',component:RegisterTravelAgentComponent},
  {path:'TRAVELAGENT',component:TravelAgentComponent},
  {path:'registerQuide',component:RegisterQuideComponent},
  {path:'registeredPackage',component:RegisteredPackageComponent},
  {path:'registerPackage',component:RegisterPackageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UpdatePackage,
    NavigationComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    SignUpComponent,
    RegisterTravelAgentComponent,
    TravelAgentComponent,
    RegisterQuideComponent,
    RegisteredPackageComponent,
    RegisterPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule





    
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatCardModule
    
  ],
  providers: [AuthService,NavigationComponent,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
