# React Study
## NOTE

> React.Component
- [props]를 [input]으로 하고 UI가 어떻게 보여야 하는지 정의하는 [React Element]를 [output]으로 하는 함수
- 합성을 이용하여 “UI를 재사용할 수 있고 독립적인 단위로 쪼개어 생각”할 수 있게 한다

> Props / State
- props : 부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용 (읽기 전용)
- state : 컴포넌트 자기 자신이 갖고 있는 값. 변화가 필요할 경웅 [setState()]를 통해 변경

> Array push() vs. concat()
- push : 원본 데이터에 아이템을 추가 > 원본 데이터가 변한다
- concat : 새로운 복제본을 만들어서 아이템을 추가하여 리턴한다
- setState > 새로운 데이터를 추가하는 것을 사용(성능 개선할 때 좋고 편하다)
- react >  immutable > 원본을 바꾸지 않는다

> Redux 기본 원칙
- Single Source of Truth > 하나의 애플리케이션 안에는 하나의 스토어만 사용하자
- State is read-only > 상태를 변화시키는 방법은 오직 액션을 일으키는 것
- Changes are made with pure functions > 변화를 일으키는 리듀서 함수는 순수한 함수
  - [순수함수]
    1. 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받는다.
    2. 파라미터 외의 값에는 의존하면 안된다.
    3. 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환한다.
    4. 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 한다.

> Redux
- store > 상태가 관리되는 오직 하나의 공간
- action > 앱에서 스토어에 운반할 데이터 (주문서) / 자바스크립트 객체 형식
- reducer > [Action]을 [Reducer]에 전달 > [Reducer]가 주문을 보고 [Store]의 상태를 업데이트 
- [Action]을 [Reduce]에 전달하기 위해서는 dispatch() 메소드를 사용

>  
 

***

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
