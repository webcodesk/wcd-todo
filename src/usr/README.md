# Webcodesk beginner tutorial

Going through this tutorial, you will create a ToDo application from prepared React components and functions.

If you have ever created an application with React components, then you should be able to clearly understand what a React component is.
However, the concept of "function" is probably also familiar to you. 

You must be used to writing source code to create logic of how components behave in an application. 
In this tutorial, you will try to make the components work without writing code.

Let's get started.

***If you have already done something or created something in this project before you started reading this article, then reload the entire page in your browser and select "Reset to default demo" option after reloading.***

## Getting familiar with the workspace

On the left side of the screen you can see the resource panel that is available at the very beginning and broken down into sections.
The numbers in the section headers show that you have 11 components, 13 functions, and one template in the "Templates" section.

Let's look at the components first.
Open the "Components" section. You can see the directories with components inside.

### Components

The directories are named so that you can easily find the right component that has a specific purpose in the project.

For example, there are three groups in this project:
* atom - simple components such as buttons and icons;
* layout - the components that are responsible for the layout of the components on the page;
* todo - the components that are specifically designed for the ToDo application.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic1.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic1.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>

#### Component playground

In Webcodesk you can see how each component behaves individually (like in the famous **Storybook**).

Open any directory and click on the name of any component.
A tab should appear in front of you in the central area of the screen, where you can see the component look and feel.

Here you can play with the component - change its properties, or click to see the corresponding events occurring.
In addition, you can also read the component specification, describing its properties and the purpose.

This is cool because you are not familiar with the components at this stage and how they can be used in an application.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic2.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic2.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>

### Functions

Now let's have a look at the Functions section. This section has the same directories as the "Components" section.

If you expand the directory, you will notice that there are names of function sets that match the names of components inside.
This means that the sets contain functions somehow related to components - we will discuss this later.

If you click on the name of the functions set, in a new tab you can read the specification of all functions that are included in this set.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic3.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic3.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>

## Building the application

You're in luck - you have instructions on how to build an application, and you don't need to get familiar with each component and figure out how to build the application.
However, in a real project, you would have to explore the specification of each component and function to start building the application.

So, let's start building according to the instructions.

### Home page

First of all, you need to create a page named `main`, which will serve as the home page of our application.

> The page named "main" in Webcodesk projects is used as the home page and will be available at two addresses: `/` and `/main`

Click on the button with the "plus" icon next to the "Pages" section name.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic4.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic4.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Type in the page name `main` and click the `Create` button in the dialog.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic5.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic5.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

A new tab should open in front of you - this is the editor of the `main` page.

> If you do not see the "circle plus" icon in the center of the page, find the `Reload` button in the top toolbar and click on it to reload the page.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic6.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic6.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now use the mouse to drag the `PageFrameWithActionButton` component from the "Components" section to an empty area in the center of the page.

After that, nothing will change visually on the page. So to check the result click on the `Structure` button in the top toolbar.
In this way, you will open the left panel in the page editor, where you will be able to see the components of the page at the moment.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic7.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic7.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

### Component instances

You can see in the page structure that the root component of the page is some `pageFrameWithActionButton`.
This name exactly matches the name of the component that we dragged, but somehow this name starts with a small letter.

***We need to stop here and find out where the `pageFrameWithActionButton` name came from.***

The point is that we can use many instances of components on the application pages.
Each of such instances may have different values in the properties.
That makes the component approach so popular in development - we can reuse the same components but with different settings in its properties.

Different instances of components in the pages must have unique names.
However, if you want to use the same instances of the component in different places on the page, or a different page at all, 
then you just need to give an identical name to these instances of the component.

In this case, Webcodesk automatically created a name for a new instance of the component.
If you have not changed this name, then when you create a new copy you may accidentally overwrite the properties of other instances with the same name.

### First component instance

So you need to change the name of the `pageFrameWithActionButton` instance.
Find the `Instance name` field in the properties panel on the right side of the screen and change the name to `mainPageFrame`.

Now click the `Save` button on the top toolbar - this way we will save our changes just in case.

> However, Webcodesk saves all changes in the page editor automatically if you switch to another tab.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic8.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic8.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

### First composition

Open a panel with the page structure. You will see several areas bordered by a dashed line. 
These are areas in which you can place other components.
Each of these areas corresponds to some property with the type `Element` or `Node` in the component instance.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic9.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic9.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Drag and drop the `NavigationTabs` component into the `Application Bar Content` area, which is in the `mainPageFrame` instance.
Highlight the newly created `navigationTabs` instance (click on it) and rename it as `mainPageNavigationTabs`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic10.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic10.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

You can see that the background of your header is dark and therefore it blends in with the text of the buttons in `mainPageNavigationTabs` instance.
So we need to change the header color of the `mainPageFrame` instance.

Highlight `mainPageFrame` and find the `Application Bar Palette` property group in the property panel. 

Expand the group by clicking on it. Then expand the `Background Color` internal group. 
Now select the name of the color `white` from the drop-down list in the `Color Hue` property.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic11.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic11.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

You can see that the background of the central area of the page is slightly different from the background of the page title. 
So you should change the background of the page to the color `white` too.

With `mainPageFrame` selected, find the property `Color Hue` in the group `Main Area Palette` -> `Background Color` and set the value to `white`.

> This project uses the Material UI library for its components, so most properties use the MUI components terms.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic12.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic12.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>


### First flow

Click on the "Live Preview" tab to see how your page will look and feel in your browser.

If you click on the navigation buttons at the top of the page, you will notice that the buttons are not activated when you click on them.
Let's try to bring them to life.

You need to create a flow diagram in which the navigation behavior will be described. 

> In Webcodesk projects, flow diagrams are used to describe the sequence of actions that will be performed when some events occur.

For example, at this stage we need to describe what will happen if you click on the navigation button.

Click on the button with the "plus" icon next to the "Flows" section name.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic13.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic13.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>


The `NavigationTabs` component is designed specifically for the ToDo application, and its specification says that it should be used to filter ToDo records. 
So give the name `change-navigation-filter-by-click` to the flow.

> Give a name to the flow that makes it clear what's going on in it. 
> In this way, we will be able to quickly understand where the necessary logic of the application is located.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic14.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic14.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

A new tab with a new flow diagram will open in front of you. 

> If you are not satisfied with the position of the diagram on the screen, 
you can move the whole picture with the mouse - press the left mouse button and drag the cursor in the desired position.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic15.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic15.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now find a `mainPageNavigationTabs` instance in the panel on the left in the Pages section, expanding the `main` page branch of the resource tree.

Drag and drop the name of the `mainPageNavigationTabs` instance directly onto the `Application` diagram element. 
The `Application` element will be automatically replaced by the `mainPageNavigationTabs` instance element.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic16.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic16.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

As you can see, the image of the instance element shows dots. 
The dot on the left indicates the data input, and the dots on the right indicate the data outputs.

All instances of components have one input - `props`, which stands for all component properties except those that have the function type. 

The component may have several outputs. 
Each of the outputs corresponds to the property of the component with the function type, i.e. some event in the component.

In this case, you see two outputs and therefore two events may occur in the navigation: `onActiveTabUpdated` and `onChangeActiveTab`. 
As stated in the specification, the `onChangeActiveTab` event occurs when the user clicks on the navigation button.
You can use this event to make the button active when clicking on it.

But first, let's find out how the navigation component displays which button will be active at a certain point in time.

Go to the `main` page editor tab and select a `mainPageNavigationTabs` instance (click on it), 
you can find the `Active Tab Type` property in the properties. 
If you set a different value in this property, you can see that the active button has changed to another one.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic17.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic17.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Obviously, to switch the active button on the `onChangeActiveTab` event, you need to change the `Active Tab Type` property.
You have to describe it somehow in your `exchange-navigation-filter-by-click` flow.

> Changing properties in instances of components is the responsibility of the corresponding functions. 
In this project, such functions are included in function sets with names identical to the names of components whose properties they can change.

Go to the `change-navigation-filter-by-click` tab, find the `setActiveNavigationTab` function in the resource tree 
("Functions" -> "todo" -> "NavigationTabs") and drag the function name to any free area in the flow diagram.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic18.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic18.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>


Similar to the instances of components, each function has one input and can have several outputs on the flow diagram.

Now you need to connect the `onChangeActiveTab` output of the `mainPageNavigationTabs` instance to the `callFunction` input of the `setActiveNavigationTab` function.

> Move the mouse cursor over the `onChangeActiveTab` output point, press the left mouse button and drag the arrow that has appeared to the `callFunction` entry point and release the left mouse button.

> If you made a mistake and connected the wrong input and output, then just repeat the action with the correct output and input, then the connection will automatically update.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic19.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic19.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now the `setActiveNavigationTab` function will be triggered by clicking on a button in the navigation. 

Still, nothing will happen on the page, because the result of the function is not passed to the properties of the component instance.

If you want to fix this, drag the name of the same `mainPageNavigationTabs` instance from the branch "Pages" -> "main" somewhere on the flow diagram.
Connect the `navigationTabsProps` output of the `setActiveNavigationTab` function to the input of the new `mainPageNavigationTabs` instance.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic20.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic20.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now you can freely switch to the "Live Preview" tab and check the flow result.

All right, if everything works as intended, you can continue to complete the composition of the main page.

### Continue composition

Go to the tab of the `main` page editor, or if it is closed, open it by clicking on the page name in the "Pages" section.

#### Container

Open the `Structure` panel in the page editor, 
and drag the `Container` component from the resource tree to the free `0 item` area of the group`Main Area Children` in the page structure.

Rename the `container` instance as `mainPageContainer`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic21.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic21.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

You may have noticed that some properties have names such as `0 item`, `1 item`, etc. 

For example, you can see this in the `Tabs` property in the `mainPageNavigationTabs` instance. 
This means that the `Tabs` property has an array type and can contain several similar properties or groups of properties.

> For more details about the property types in components, see the User Guide (link).

For now, just understand that you can increase the number of items in an array or remove items from an array right in the properties panel.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic22.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic22.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

The `mainPageFrame` instance contains one item in the `Main Area Children` array and this is now enough for the container to which we will add other instances of the components.

Now you need to move the container down a bit because it overlaps with the top area of the page where the navigation is located.

So find the `Main Area Padding` property group in the `mainPageFrame` instance. 
Expand it and change the values of the `Padding Top` property to `100px`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic23.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic23.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Click `mainPageContainer` instance in the page structure and change the `Max Width` property to `sm`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic24.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic24.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### Grid

Find the `Grid` component in the resource tree on the left and drag the name to the empty area inside the `mainPageContainer` on the page, or to the `Content` area in the page structure tree. 
And rename the instance as `mainPageGrid`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic25.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic25.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

The `Cells` property of the `mainPageGrid` instance contains 3 items by default.
 
You only need two cells in the grid - one for the title and one for the DoTo list of entries.

So expand the `Cells` array and remove one item from the array by clicking on the `Delete` button near the property field name.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic26.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic26.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now expand the group `Grid` in the properties of the `mainPageGrid` instance, and set the value of `Spacing` to 3.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic27.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic27.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### Typography

Drag the `Typography` component from resources to the first cell of the `mainPageGrid` instance. 
Rename the instance as `mainPageLabel`. 
Set the following property values:
* `Align`: `center`
* `Variant`: `h5`
* `Text`: "ToDos"

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic28.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic28.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### Paper

Place the `Paper` component from resources in the second cell of the `mainPageGrid` instance.
Rename the copy of the component as `mainPagePaper` and set the following properties:
* `Elevation`: 2
* `Palette` -> `Background Color` -> `Color Hue`: "blue"
* `Palette` -> `Color` -> `Color Hue`: "white"

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic29.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic29.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### ToDoNotesList

Drag the `ToDoNotesList` component from resources to `0 item` in the array `Children` under the `mainPagePaper` instance.
Rename the new instance as `mainPageNotesList`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic30.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic30.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### ActionButton

Now add a button that will create new entries in the ToDo list. 
Drag the `ActionButton` component to the free area `Action Button Content` inside the `mainPageFrame` instance (find it in the page structure tree).
Rename the `Action Button` instance as `mainPageActionButton` and set such properties:
* `Color`: "primary"
* `Size`: "large"

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic31.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic31.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Your button is missing a plus icon. The `SvgIcon` component is responsible for icons in the project. It displays SVG drawings as icons.

To save you time, you already have a prepared "plus" icon in the "Templates" section and the "icons" directory - `add-icon`.
There you will find an instance of the `SvgIcon` component with the preset value of the `Path` property.

So just drag the name `add-icon` from the "Templates" section to the free area `Icon` under the instance `mainPageActionButton` in the page structure tree.
And don't rename a new instance.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic32.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic32.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

This is what the `main` page on the view should look like in "Live Preview".

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic33.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic33.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

### Second page

Then you need to create a second application page where the user can write the text of a new ToDo entry.
Create a new page in the "Pages" section and name it as `new-note`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic34.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic34.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now, quickly create a composition on the page.

#### Copy/Paste

Go to the tab with the `main` page. Select the `mainPageFrame` instance in the editor.
Copy it to the clipboard by pressing the `Ctrl + C` / `Command + C` key combination, or click the copy button on the top toolbar.

Now go to the tab of the `new-note` page.
Select the empty area at the root of the page structure tree and press the insertion key combination from the clipboard: `Ctrl + V` / `Command + V`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic35.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic35.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### Delete

Select the `mainPageActionButton` instance and delete it by pressing the `Delete` key or the `Delete` button on the top toolbar.
Do the same with `mainPageNavigationTabs` and `mainPageNotesList` instances.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic36.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic36.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### Rename

Now you need to rename the following instances of components on the `new-note` page:
* `mainPageFrame` rename as `newNotePageFrame`
* `mainPageContainer` rename as `newNotePageContainer`
* `mainPageGrid` rename as `newNotePageGrid`
* `mainPageLabel` rename as `newNotePageLabel`
* `mainPagePaper` rename as `newNotePagePaper`

Set "New ToDo" to `Text` in the `newNotePageLabel` instance.

Set the following properties in the `newNotePagePaper` instance:
* `Elevation`: 2
* `Padding Spacing` -> `Padding Left`: 2
* `Padding Spacing` -> `Padding Right`: 2
* `Padding Spacing` -> `Padding Bottom`: 2
* `Palette` -> `Background Color` -> `Color Hue`: "yellow"
* `Palette` -> `Background Color` -> `Color Shade`: 100
* `Palette` -> `Color` -> `Color Hue`: "undefined"

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic37.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic37.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### NewNoteForm

Place the `NewNoteForm` component in the `Children` -> `0 item` of the `newNotePagePaper` instance in the page tree structure.
Rename its instance to `newNotePageForm`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic38.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic38.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>


### Creating flows

So far, nothing works on the pages except switching the active button in navigation.

#### Go to new note page

First, you need to make sure that when the user clicks on the `mainPageActionButton` on the `main` page, 
the user goes to the `new-note` page.

Create a new flow with the name `go-to-new-note-page`. 
Move the `mainPageActionButton` instance to the `Application` item, thereby replacing it.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic39.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic39.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

The `goToPage` function is responsible for navigation between pages. Place the function in the empty area of the flow diagram.
The `mainPageActionButton` has an event `onClick` and you can bind this event to the input of the `goToPage` function.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic40.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic40.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### PageRouteAnchor

But you may have noticed that this function is in a set of functions with the name of the `PageRouteAnchor` component.
And this function must be somehow related to this component.

Indeed, if you read the specification of the `goToPage` function, 
you will realize that the output of the `pageRouteAnchorProps` function should be associated with an instance of the `PageRouteAnchor` component. 

But we don't have a copy of that component on any page. That's because we only did visual components.
Now it's time to add the required invisible components.

Go to the tab of the page `main`. Open the page tree structure and select `mainPageFrame` instance.
In the property editor find the `Hidden Components` array and add one item to it by clicking the "+1" button.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic41.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic41.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now drag the `PageRouterAnchor` component into the free area `0 item` under `Hidden Components` in the page structure tree.
Rename the new instance to `newNotePageRouteAnchor` and set `/new-note` to the property `Page Route Path`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic42.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic42.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now you can go to the `go-to-new-note-page` tab of the flow diagram. 
Drag the `newТotePageRouteAnchor` instance somewhere on the free space in the diagram. 
Connect the `pageRouteAnchorProps` output of the `goToPage` function to the `props` input of the `newNotePageRouteAnchor` instance.

Because of this connection, the function can read the value of the `Page Route Path` property and navigate to the address specified there.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic43.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic43.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

You can try how it works in the "Live Preview" tab.

#### Go back to home page

Now you need to create a flow diagram to return the user to the main page if the user pressed the `Cancel` button in the form of adding a new note.

However, before that, you need to add an instance of the `PageRouterAnchor` component to the `new-note` page in order to go to the `main` page.

Open the tab of `new-note` page and add the item to the property `Hidden Components` in the instance `newNotePageFrame`.
Drag the `PageRouterAnchor` component to the new item, and rename the instance to `mainPageRouteAnchor`.
Set "/" to the `PageRoute Path` property.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic44.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic44.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Create a new flow chart named `cancelling-new-note`. 
Replace the `Application` element with the `newNotePageForm` instance.
Add the `goToPage` function to the diagram and connect its input to the `onCancel` output of the `newNotePageForm` instance.

> The `onCancel` event occurs when the user clicks on the `Cancel` button in the `newNotePageForm` form.

Add the `mainPageRouteAnchor` instance (from the "Pages" section and the `new-note` page) to the diagram. 
Connect the `pageRouteAnchorProps` output of the `goToPage` function to the `props` input of the `mainPageRouteAnchor`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic45.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic45.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

You can make sure that clicking the `Cancel` button brings the user back to the home page in the tab "Live Preview".

#### Load notes on start

The ToDo list on the home page is still empty. 
But this is fixable because you have a set of functions that you can use to get the list of ToDo notes, filter it and save it.

As far as the description of the functions in `ToDoActions` can be understood, 
you can load all entries from the database and place them in a buffer for further work with them through this buffer.

The list should be loaded at the very beginning of the application. This can easily be done in a new flow.

Create a new flow chart named `load-notes-on-start`. 
Put the `getNotes` function somewhere in the free space on the chart.
Connect the output `onApplicationStart` of the `Application` element to the input of the `getNotes` function. 
In this way, you have specified that the list of entries should be loaded at the start of the application in your browser.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic46.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic46.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

The loaded list should be saved in the memory buffer. This can be done using the `putIntoNotesBuffer` function.
Connect the output `notes` of the function `getNotes` to the input of the function `putIntoNotesBuffer`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic47.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic47.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

You need a memory buffer to minimize the number of function calls to update the `mainPageNotesList` component.

#### Buffer listener

You can connect a buffer to the component via the listener function, which will send updated data to the component every time the list in the buffer is changed.
Otherwise, you would have to add function calls to update the list in `mainPageNotesList` instance every time the list is changed.

Create a new flow chart named `update-notes-by-navigation-filter`. 
This name is chosen because the list must always be filtered by the selected filter type in the `mainPageNavigationTabs` instance.

Add the `listenToNotesBuffer` function to the diagram and connect its input to the `onApplicationStart` output of the `Application` element. 
Thus, you have specified that when launching the application in a browser, you should start monitoring the changes in the buffer.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic48.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic48.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now you need to tell what to do when the list in the buffer changes.
Add the `filterNotes` function and connect its input to the `updatedData` output of the `listenToNotesBuffer` function.
Add the `mainPageNotesList` instance and connect its input to the `todoNotesListProps` output of the `filterNotes` function.
Also add the `mainPageNavigationTabs` instance and connect its input to the `navigationTabsProps` output of the `filterNotes` function.

You probably guessed that in this case `filterNotes` function will read all properties of the `mainPageNavigationTabs` instance and depending on the value 
in the `Active Tab Type` property will filter the updated list from the buffer and pass it to the `todoNotesListProps` instance properties.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic49.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic49.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### Filter by click

You still need to finish the flow where the list in the buffer is filtered according to the selected filter.

So open the `change-navigation-filter-by-click` flow diagram and add the `getNotes` function to it.
Connect the `onActiveTabUpdated` output of the `mainPageNavigationTabs` instance (the last one in the chain) to the input of the `getNotes` function.
And connect the `notes` output of the `getNotes` function to the input of the function `putIntoNotesBuffer`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic50.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic50.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

If you now check how the application works, you will see only a blank list.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic51.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic51.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

#### Add new note

Now you need to create a flow that allows the user to add new ToDo items to the list.

Create a new flow diagram with the name `adding-new-note`.
Replace `Application` with the `newNotePageForm` instance. 
Add the `validateNoteText` function to the diagram. 
Connect the `onSaveNote` output of the `newNotePageForm` instance to the input of the `validateNoteText` function.

> The `onSaveNote` event occurs when the user clicks on the `Save` button in the `newNotePageForm` form.
> The function gets the text of a new record at the output.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic52.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic52.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

The `validateNoteText` function checks the text passed to it, and if the text does not pass the test, the `failure` event occurs.
You should connect the `setError` function from the `NewNoteForm` function set to the `failure` output, 
and connect the `newNoteFormProps` output of the `setError` function to the `props` input of the `newNotePageForm` instance.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic53.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic53.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

If the verification is successful, the `validateNoteText` function sends valid text to the `noteText` output.
 
Connect the `noteText` output to the input of the function `createNewNote` from the `ToDoActions` set.
Connect the `notes` output of the `createNewNote` function to the `saveNotes` input. 

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic54.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic54.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

If the `success` event in the `saveNotes` function is executed, it means that the new record has been successfully saved in the local database.
 
Connect the input of the `goToPage` function to the `success` output, which in turn connects to the `mainPageRouteAnchor` instance.

This is how you described the chain of actions for creating a new record and saving it in the local database, and navigating to the main page.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic55.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic55.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

You still need to update the list in the buffer so that the new list appears on the main page.
So add the `putIntoNotesBuffer` function and connect its input to the `notes` output in the `saveNotes` function. 

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic56.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic56.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

You can check how adding a new record in the "Live Preview" tab works.

#### Toggle or delete note

There remains one more flow diagram with deleting the entry and changing the status of the entry in the list.
Since this is all done by different events that occur in the `mainPageNotesList` instance, you can do everything in one flow diagram.

Create a flow diagram with the name `toggle-or-delete-note-by-user`.
Replace the `Application` element with the `mainPageNotesList` instance.
Add the `deleteNote` function and connect its input to the `onDeleteNote` output of the `mainPageNotesList` instance.
Also add the `saveNotes` function and connect its input to the `notes` output of the `deleteNote` function.

And as you may have guessed, it is necessary to update the records in the buffer. 
So drag the `putIntoNotesBuffer` function and connect its input to the `notes` output  of the `saveNotes` function.
All right, you have described the deletion of records by clicking the delete button in the list on the main page.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic57.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic57.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now describe the part of the flow to change the status of the record in the list by clicking on checkbox.
Add the `toggleNodeCompleted` function and connect its input to the `onToggleNoteCompleted` output of the `mainPageNotesList` instance.
Then add another element of the `saveNotes` function and connect its input to the `notes` output of the `toggleNodeCompleted` function.

And of course, you have to pass the new list to the buffer.
Add the `putIntoNotesBuffer` function and connect its input to the output of the `saveNotes` function.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic58.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic58.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

Now your application has fully implemented functionality. Check it out in "Live Preview". 
You can also open the application in a separate window by clicking on the `Open URL` button in the top toolbar of the "Live Preview".

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic59.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic59.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>


## Design System

It is possible to set global properties of the entire application in Webcodesk projects. 
Since this project uses the Material UI library, which allows you to create different themes for components, 
there are settings of the theme in the project.

Open the "Live Preview" tab and click the `Settings` button on the top toolbar. 
You will see a property panel similar to the property panel in the page editor. 

The project has implemented the smallest part of the Design System settings for the Material UI theme as an example of Webcodesk capabilities.

> Read in the User Guide (link) how global settings are added to the project code.

So you can only change the colors that are used in the components here.
Change the value of property `Theme` -> `Palette` -> `Primary` -> `Main` -> `Color Hue` to "orange" and press `Save Changes` button at the top of the panel.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic60.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic60.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

## Debug data flow

In addition to the fact that you can debug the application using the tools built into the browser, 
Webcodesk provides the ability to visualize the flow of data through the elements.

Open the "Live Preview" tab and click on the `Record Actions` button. 
It should change its name to `Stop Recording` immediately.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic61.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic61.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>


Now click, for example, on the filter buttons: `Active` -> `Completed` -> `All`. 
And then click on `Stop Recording`.

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic62.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic62.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>


You will see a large flow diagram from all the diagrams that you have created. 
Only the elements through which the flow has been through will be colored.  

<a href="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic63.jpg" target="_blank">
<img src="https://raw.githubusercontent.com/webcodesk/wcd-todo-tutorial-demo/master/pics/pic63.jpg"
     style="border: 1px solid #cdcdcd; border-radius: 4px; width: 70%" />
</a>
<br/>
<br/>

-----