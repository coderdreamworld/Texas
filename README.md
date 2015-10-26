# Texas 项目说明

## 运行说明

首次运行，需要先使用 CocosStudio 2.1.5 版本打开 cocosstudio 文件夹下的 ccs 文件并发布资源项目。

## 资源说明

* cocosstudio 中为 CocosStudio 2.1.5 的资源项目文件。
* CocosStudio 项目发布时，会将资源文件发布到 res/ccs 文件夹下。
* res/ccs 文件夹是不在版本控制下的，原则上也不允许将非 Studio 使用的资源放到此文件夹下。这是为了保证此文件夹可以随意删除，然后通过 Studio 发布项目功能重新生成。
* **遗留问题：** 如何让 Studio 项目所用资源与代码直接使用的资源实现共用。

## 编码规范

### 命名规范

 - 当我们为变量, 函数和实例命名时, 使用 camelCase 命名法.

   ```javascript
   // bad
   var FOOBar = {};
   var foo_bar = {};
   function FOOBar () {}

   // good
   var fooBar = {};
   function fooBar () {}
   ```

 - 当我们为类或者模块命名时, 使用 PascalCase 命名法.

   ```javascript
   // bad
   var foobar = cc.Class({
       foo: 'foo',
       bar: 'bar',
   });
   var foobar = require('foo-bar');

   // good
   var FooBar = cc.Class({
       foo: 'foo',
       bar: 'bar',
   });
   var FooBar = require('foo-bar');
   ```

 - 使用前置下划线 `_` 当我们为私有属性命名

   ```javascript
   // bad
   this.__firstName__ = 'foobar';
   this.firstName_ = 'foobar';

   // good
   this._firstName = 'foobar';
   ```

### 语法规范

 - 使用 `{}` 创建一个 object

   ```javascript
   // bad
   var obj = new Object();

   // good
   var obj = {};
   ```

 - 使用 `[]` 创建一个 array

   ```javascript
   // bad
   var array = new Array();

   // good
   var array = [];
   ```

 - 尽可能在 js 代码中使用单引号 `''` 来定义 string

   ```javascript
   // bad
   var str = "Hello World";

   // good
   var str = 'Hello World';
   ```

 - 多行 string 定义时, 尽可能使用 `+` 定义

   ```javascript
   // bad
    const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

    // bad
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // good
    const errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';
   ```

 - 使用 `===` 和 `!==` 而不是 `==` 和 `!=`.

### 书写规范

 - 根据个人习惯, 和原代码作者格式, 选择 4 个空格或者 2 个空格作为缩进

   ```javascript
   // bad
   function() {
   ∙var name;
   }
   
   // very bad
   function() {
   ∙∙<tab>∙∙var name;
   }

   // good
   function() {
   ∙∙var name;
   }

   // good
   function() {
   ∙∙∙∙var name;
   }
   ```

 - 尽可能将 `{` 和表达式放在同一行

   ```javascript
   // bad
   if ( isFoobar )
   {
   }

   // good
   if ( isFoobar ) {
   }

   // bad
   function foobar()
   {
   }

   // good
   function foobar() {
   }

   // bad
   var obj =
   {
       foo: 'foo',
       bar: 'bar',
   }

   // good
   var obj = {
       foo: 'foo',
       bar: 'bar',
   }
   ```

 - 在 `{` 前请空一格

   ```javascript
   // bad
   function test(){
       console.log('test');
   }

   // good
   function test() {
       console.log('test');
   }

   // bad
   dog.set('attr',{
       age: '1 year',
       breed: 'Bernese Mountain Dog',
   });

   // good
   dog.set('attr', {
       age: '1 year',
       breed: 'Bernese Mountain Dog',
   });
   ```

 - 在逻辑状态表达式 ( `if`, `while` ) 的 `(` 前请空一格

   ```javascript
    // bad
    if(isJedi) {
        fight ();
    }

    // good
    if (isJedi) {
        fight();
    }
    ```

 - operator 之间请空一格

   ```javascript
   // bad
   var x=y+5;

   // good
   var x = y + 5;
   ```

 - 在 Block 定义之间请空一行

   ```javascript
   // bad
   if (foo) {
       return bar;
   }
   return baz;

   // good
   if (foo) {
       return bar;
   }

   return baz;

   // bad
   const obj = {
       foo() {
       },
       bar() {
       },
   };
   return obj;

   // good
   const obj = {
       foo() {
       },

       bar() {
       },
   };

   return obj;

   // bad
   const arr = [
       function foo() {
       },
       function bar() {
       },
   ];
   return arr;

   // good
   const arr = [
       function foo() {
       },

       function bar() {
       },
   ];

   return arr;
   ```

 - 不要使用前置逗号定义

   ```javascript
   // bad
   var story = [
         once
       , upon
       , aTime
   ];

   // good
   var story = [
       once,
       upon,
       aTime,
   ];

   // bad
   var hero = {
         firstName: 'Ada'
       , lastName: 'Lovelace'
       , birthYear: 1815
       , superPower: 'computers'
   };

   // good
   var hero = {
       firstName: 'Ada',
       lastName: 'Lovelace',
       birthYear: 1815,
       superPower: 'computers',
   };
   ```

### Studio 项目编辑规范

需要在代码中调用的控件命名需要带有类型前缀，列表如下：

	控件类型 | 前缀
	------------ | ------------- 
	Button | btn
	Label | label 
	Sprite | sp
	List | list
	其他类型 | 待定
