# Angular
## Practice

### Sumary

<table>
   <tr> 
     <th> Content </th>
  </tr>
  <tr> 
    <td>
          <ul>
            <li>* [ ] <a href="https://github.com/gil-son/angular/tree/main/LoianeGroner#module">Module</a></li>
            <li>* [ ] <a href="https://github.com/gil-son/angular/tree/main/LoianeGroner#template">Template</a></li>
            <li>* [ ] <a href="https://github.com/gil-son/angular/tree/main/LoianeGroner#services">Services</a></li>
            <li>* [x] <a href="https://github.com/gil-son/angular/tree/main/LoianeGroner#bind-and-interpolation">Bind and Interpolation</a></li>
            <li>* [x] <a href="https://github.com/gil-son/angular/tree/main/LoianeGroner/lesson10-class-and-style-binding">Class and Style Binding</a></li>
          </ul>
    </td>
  </tr> 
</table>
 
  ### Module
  
 <p>
    Soon
 </p>
 
 ### Template
 <p>
    Soon
 </p>
 
 
 ### Service
 <p>
    Soon
 </p>
 
 ### Bind and Interpolation
 
<p> 
  Is a way to associate information that is in the component and vise and versa: variable, attribute, method, etc.
  These events can be executed and handled with some logic.
</p>
 
 <p>
  Scenarios:
 </p>

<ul>
    <li>  <</>template></> <</>--{{value}}-- <</>component></></li>
    <li>  <</>template></> <</>--[propertie]-- = "value" -- <</>component></></li>
    <li>  <</>template></> --(event)="handler"--></> <</>component></li>
    <li>  <</>template></> <</>--[(ngModel)]="propertie"--> <</>component></></li>
</ul>



### Class and Style Binding


<p>
   Use instead of variables/methods like Binding property using components, it's used in CSS. Example with class membership:
</p>



```
<div>
            Select a class:
                <select #variableClass (change)="0">
                    <option value="alert-success">Sucess</option>
                    <option value="alert-info">Info</option>
                    <option value="alert-warning">Alert</option>
                    <option value="alert-danger">Erro</option>
                </select>
                <br><br>
                
                <div class="alert" role="alert" [class.alert-success] = "variableClass.value == 'alert-success'" >success</div>
                <div class="alert" role="alert" [class.alert-info] = "variableClass.value == 'alert-info'" >info</div>
                <div class="alert" role="alert" [class.alert-warning] = "variableClass.value == 'alert-warning'">warning</div>
                <div class="alert" role="alert" [class.alert-danger] = "variableClass.value == 'alert-danger'">danger</div>

        </div>

```


<p> With Interpolation: </p>

```
<div class="alert {{variableClass.value}}" role="alert" >This text will fill according the value of combobox</div>

```

<p> Example with Style binding: </p>

```
<div class="alert alert-danger"
                     role="alert"
                     [style.display] = "variableClass.value == 'alert-danger' ? 'block' : 'none' ">
                    
                    This text will appear in cause of error
                </div>

```


### Source

<ul>
<li>
<a href="https://www.youtube.com/watch?v=tPOMG0D57S0&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G"> Angular by Loiane Grone</a>
 
 </ul>
