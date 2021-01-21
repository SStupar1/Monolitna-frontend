import { CartComponent } from './pages/cart/cart.component';
import { AdDetailsComponent } from './pages/ad-details/ad-details.component';
import { AdCardComponent } from './pages/ad-card/ad-card.component';
import { AddCommentComponent } from './pages/new-items/add-comment/add-comment.component';
import { UpdateCarComponent } from './pages/updates/update-car/update-car.component';
import { ReservationsHistoryComponent } from './pages/lists/reservations-history/reservations-history.component';
import { PublisherReservationsComponent } from './pages/lists/publisher-reservations/publisher-reservations.component';
import { PublisherBundlesComponent } from './pages/lists/publisher-bundles/publisher-bundles.component';
import { PublisherAdListComponent } from './pages/lists/publisher-ad-list/publisher-ad-list.component';
import { RentAdListComponent } from './pages/lists/rent-ad-list/rent-ad-list.component';
import { AddPricelistComponent } from './pages/new-items/add-pricelist/add-pricelist.component';
import { UpdateCarBrandComponent } from './pages/updates/update-car-brand/update-car-brand.component';
import { UpdateCarClassComponent } from './pages/updates/update-car-class/update-car-class.component';
import { UpdateCarModelComponent } from './pages/updates/update-car-model/update-car-model.component';
import { UpdateGearshiftTypeComponent } from './pages/updates/update-gearshift-type/update-gearshift-type.component';
import { UpdateFuelTypeComponent } from './pages/updates/update-fuel-type/update-fuel-type.component';
import { AddGearshiftTypeComponent } from './pages/new-items/add-gearshift-type/add-gearshift-type.component';
import { AddFuelTypeComponent } from './pages/new-items/add-fuel-type/add-fuel-type.component';
import { AddCarBrandComponent } from './pages/new-items/add-car-brand/add-car-brand.component';
import { AddCarModelComponent } from './pages/new-items/add-car-model/add-car-model.component';
import { AddCarClassComponent } from './pages/new-items/add-car-class/add-car-class.component';
import { GearshiftTypesComponent } from './pages/lists/gearshift-types/gearshift-types.component';
import { FuelTypesComponent } from './pages/lists/fuel-types/fuel-types.component';
import { CarBrandsComponent } from './pages/lists/car-brands/car-brands.component';
import { CarModelsComponent } from './pages/lists/car-models/car-models.component';
import { CarClassesComponent } from './pages/lists/car-classes/car-classes.component';
import { CommentRequestsComponent } from './pages/lists/comment-requests/comment-requests.component';
import { RegisterAgentComponent } from './pages/register-agent/register-agent.component';
import { BlockedComponent } from './pages/lists/blocked/blocked.component';
import { ActivatedComponent } from './pages/lists/activated/activated.component';
import { UpdateSimpleUserComponent } from './pages/updates/update-simple-user/update-simple-user.component';
import { AddAdComponent } from './pages/new-items/add-ad/add-ad.component';
import { UpdateAgentComponent } from './pages/updates/update-agent/update-agent.component';
import { RegistrationRequestComponent } from './pages/lists/registration-request/registration-request.component';
import { UpdateAdminComponent } from './pages/updates/update-admin/update-admin.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterSimpleUserComponent } from './pages/register-simple-user/register-simple-user.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'front-page'},
  {path: 'front-page', component:FrontPageComponent, children: [
    {path: 'register-simple-user', component: RegisterSimpleUserComponent},
    {path: 'login', component: LoginComponent}
  ]},
  {path: 'home-page', component:HomePageComponent, children: [
    {path: 'ad-card', component:AdCardComponent},
    {path: 'ad-details', component:AdDetailsComponent},
    {path: 'cart', component:CartComponent},
    {path: 'lists/registration-request', component:RegistrationRequestComponent},
    {path: 'lists/activated', component:ActivatedComponent},
    {path: 'lists/blocked', component:BlockedComponent},
    {path: 'lists/car-classes', component:CarClassesComponent},
    {path: 'lists/car-models', component:CarModelsComponent},
    {path: 'lists/car-brands', component:CarBrandsComponent},
    {path: 'lists/fuel-types', component:FuelTypesComponent},
    {path: 'lists/gearshift-types', component:GearshiftTypesComponent},
    {path: 'lists/comment-requests', component:CommentRequestsComponent},
    {path: 'lists/rent-ad-list', component:RentAdListComponent},
    {path: 'lists/publisher-ad-list', component:PublisherAdListComponent},
    {path: 'lists/publisher-bundles', component:PublisherBundlesComponent},
    {path: 'lists/publisher-reservations', component:PublisherReservationsComponent},
    {path: 'lists/reservations-history', component:ReservationsHistoryComponent},
    {path: 'updates/update-admin', component:UpdateAdminComponent},
    {path: 'updates/update-car', component:UpdateCarComponent},
    {path: 'updates/update-agent', component:UpdateAgentComponent},
    {path: 'updates/update-simple-user', component:UpdateSimpleUserComponent},
    {path: 'updates/update-fuel-type/:id', component:UpdateFuelTypeComponent},
    {path: 'updates/update-gearshift-type/:id', component:UpdateGearshiftTypeComponent},
    {path: 'updates/update-car-model/:id', component:UpdateCarModelComponent},
    {path: 'updates/update-car-class/:id', component:UpdateCarClassComponent},
    {path: 'updates/update-car-brand/:id', component:UpdateCarBrandComponent},
    {path: 'new-items/add-ad', component: AddAdComponent},
    {path: 'new-items/add-car-class', component: AddCarClassComponent},
    {path: 'new-items/add-car-model', component: AddCarModelComponent},
    {path: 'new-items/add-car-brand', component: AddCarBrandComponent},
    {path: 'new-items/add-fuel-type', component: AddFuelTypeComponent},
    {path: 'new-items/add-gearshift-type', component: AddGearshiftTypeComponent},
    {path: 'new-items/add-pricelist', component: AddPricelistComponent},
    {path: 'new-items/add-comment', component: AddCommentComponent},
    {path: 'register-agent', component: AddAdComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
