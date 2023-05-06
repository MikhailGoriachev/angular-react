// упрщенный синтакси импорта из index.ts
import { EducationComponent, ProgramingComponent, TripsComponent } from './index';

// postsRoutes - массив маршрутов для папки posts определен в отдельном модуле
// (для примера)
export const postsRoutes = [
    {path: 'education', component: EducationComponent},
    {path: 'programing', component: ProgramingComponent},
    {path: 'trips', component: TripsComponent},
];
