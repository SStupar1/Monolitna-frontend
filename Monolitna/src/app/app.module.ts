import { AddCommentComponent } from './pages/new-items/add-comment/add-comment.component';
import { UpdateCarComponent } from './pages/updates/update-car/update-car.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdDetailsComponent } from './pages/ad-details/ad-details.component';
import { AdCardComponent } from './pages/ad-card/ad-card.component';
import { ReservationsHistoryComponent } from './pages/lists/reservations-history/reservations-history.component';
import { PublisherReservationsComponent } from './pages/lists/publisher-reservations/publisher-reservations.component';
import { PublisherBundlesComponent } from './pages/lists/publisher-bundles/publisher-bundles.component';
import { PublisherAdListComponent } from './pages/lists/publisher-ad-list/publisher-ad-list.component';
import { RentAdListComponent } from './pages/lists/rent-ad-list/rent-ad-list.component';
import { AddPricelistComponent } from './pages/new-items/add-pricelist/add-pricelist.component';
import { UpdateGearshiftTypeComponent } from './pages/updates/update-gearshift-type/update-gearshift-type.component';
import { UpdateFuelTypeComponent } from './pages/updates/update-fuel-type/update-fuel-type.component';
import { UpdateCarClassComponent } from './pages/updates/update-car-class/update-car-class.component';
import { UpdateCarModelComponent } from './pages/updates/update-car-model/update-car-model.component';
import { UpdateCarBrandComponent } from './pages/updates/update-car-brand/update-car-brand.component';
import { AddFuelTypeComponent } from './pages/new-items/add-fuel-type/add-fuel-type.component';
import { AddCarClassComponent } from './pages/new-items/add-car-class/add-car-class.component';
import { AddGearshiftTypeComponent } from './pages/new-items/add-gearshift-type/add-gearshift-type.component';
import { CarBrandsComponent } from './pages/lists/car-brands/car-brands.component';
import { CarModelsComponent } from './pages/lists/car-models/car-models.component';
import { CarClassesComponent } from './pages/lists/car-classes/car-classes.component';
import { GearshiftTypesComponent } from './pages/lists/gearshift-types/gearshift-types.component';
import { FuelTypesComponent } from './pages/lists/fuel-types/fuel-types.component';
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
import { RegisterSimpleUserComponent } from './pages/register-simple-user/register-simple-user.component';
import { LoginComponent } from './pages/login/login.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData, DatePipe } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCarBrandComponent } from './pages/new-items/add-car-brand/add-car-brand.component';
import { AddCarModelComponent } from './pages/new-items/add-car-model/add-car-model.component';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    LoginComponent,
    RegisterSimpleUserComponent,
    HomePageComponent,
    UpdateAdminComponent,
    RegistrationRequestComponent,
    UpdateAgentComponent,
    AddAdComponent,
    UpdateSimpleUserComponent,
    ActivatedComponent,
    BlockedComponent, 
    RegisterAgentComponent,
    CommentRequestsComponent,
    FuelTypesComponent,
    GearshiftTypesComponent,
    CarClassesComponent,
    CarModelsComponent,
    CarBrandsComponent,
    AddGearshiftTypeComponent,
    AddCarBrandComponent,
    AddCarModelComponent,
    AddCarClassComponent,
    AddFuelTypeComponent,
    UpdateCarBrandComponent,
    UpdateCarModelComponent,
    UpdateCarClassComponent,
    UpdateFuelTypeComponent,
    UpdateGearshiftTypeComponent,
    AddPricelistComponent,
    RentAdListComponent,
    PublisherAdListComponent,
    PublisherBundlesComponent,
    PublisherReservationsComponent,
    ReservationsHistoryComponent,
    AdCardComponent,
    AdDetailsComponent,
    CartComponent,
    UpdateCarComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ScrollingModule,
    DragDropModule,
    FlexLayoutModule,
    MatSliderModule,
    BrowserAnimationsModule, 
    DemoNgZorroAntdModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
