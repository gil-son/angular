# Modules

<p>app.modules.ts:</p>
<ul>
  <li>BrowserModule - prepare the application to browser</li>
  <li>NgModule - NgModules consolidate components, directives, and pipes into cohesive blocks of functionality, each focused on a feature area, application business domain, workflow, or common collection of utilities. Modules can also add services to the application</li>
  <li>FormsModule - Exports the required providers and directives for template-driven forms, making them available for import by NgModules that import this module</li>
  <li>HttpModule - use in request and response</li>
</ul>

<p>look:</p>

```

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyFirst2Component
  ],
  imports: [
    BrowserModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Metadata


@NgModule
<ul>
<p>declarations: list of components, directives and pipes</p>
<p>imports: list of imports</p>
<p>providers: list of components services</p>
<p>bootstrap: component that must be instantiated from the application. Exclusive in root module</p>
</ul>

<p>command to create a module: ng g m name-module</p>

```
ng g m courses
```

<p> Will create a /courses inside /app. Access courses.module.ts: </p>

```

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }

```

<p>After create a module, require import it to app.module.ts:</p>

```

import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyFirst2Component
  ],
  imports: [
    BrowserModule,
    CoursesModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

<p>Well, creat a component  ng g c courses</p>
<p>Will create files inside /courses where exists files of modules</p>
<p>Now is possible use the 'selector' of your module and use this component in other pages, components, etc</p>
<p>Inside od directory courses, create other component, this will call courses-details</p>
<p>Now look courses.module.ts:</p>


```
@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDatailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }

```

<p>This file was updated</p>
<p>How courses-detail is inside of courses and courses modules is inside of app.module.ts... only
courses can use courses details, likes private mode, but if import the courses detail to app.module.ts it will
turn public</p>
<p>Thats purpose of encapsule</p>
  
