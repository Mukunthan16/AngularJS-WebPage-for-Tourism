import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'contact',component: ContactComponent},
    {path:'gallery',component: GalleryComponent},
    {path:'registration',component: RegistrationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}