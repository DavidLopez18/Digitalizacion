import { Routes } from '@angular/router';
import { LeccionesAprendidasComponent } from './lecciones-aprendidas/lecciones-aprendidas.component';
import { ManualesComponent } from './manuales/manuales.component';
import { RpasComponent } from './rpas/rpas.component';
import { TemplatesSapComponent } from './templates-sap/templates-sap.component';
import { VideoTrainingComponent } from './video-training/video-training.component';

export const routes: Routes = [
    {path:'lecciones-aprendidas',component: LeccionesAprendidasComponent},
    {path:'manuales',component: ManualesComponent},
    {path:'rpas',component: RpasComponent},
    {path:'templates-sap',component: TemplatesSapComponent},
    {path:'video-training',component: VideoTrainingComponent},
];