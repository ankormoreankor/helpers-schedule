// ! ENV variables

// 1. API (ссылка к API — дев или прод)
// 2. условия (дев или прод)
// 3. фичи в разработке (feature flags)

// console.log('→ ', RELEASE);
// console.log('→', TWO);
// console.log('→', THREE);
// console.log('→', FOUR);
// console.log('→', TRUE_SIMPLE);
// console.log('→', TRUE_STRINGIFIED);

// console.log('→ __IS_ADMIN__', __IS_ADMIN__);
console.log('→ __ENV__', __ENV__);
console.log('→ __DEV__', __DEV__);
console.log('→ __STAGE__', __STAGE__);
console.log('→ __PROD__', __PROD__);

if (__DEV__) {
    console.log('→ dev' );
}
if (__PROD__) {
    console.log('→ prod' );
}

// if (process.env.NODE_ENV === 'development') {
//     console.log('→ development');
// }

// if (RELEASE === '2.1') {
//     // код нашей фичи
// }

// import { API_URI } from '../api/config'
