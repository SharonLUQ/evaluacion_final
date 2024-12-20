import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent }, 
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            { path: 'posts', component: PostsComponent },
            { path: 'users', component: UsersComponent },
    ]
  },
];
