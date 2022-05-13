
1) npm install react-router-dom@latest
    or
npm install react-router-dom@6

2) comment  in blog file 
//return <Redirect to="/home"/>


3) Switch replace Routes  App.js


4) In App.js File comment 
//import Routes from './routes'
//import {renderRoutes} from 'react-router-config'

5) then comment in Nav.js
//  const history = useHistory()
 

npm install react-router-dom@latest
    or
npm install react-router-dom@6

1) Switch <=> Routes 
2) component={Home} <=>  element={<CryptoDetails />} 
3) Redirect <=> Navigate
4) useHistory <=> useNavigate
5) activeStyle and activeClassName remove
style={({isActive}) => { color: isActive ? 'blue' : 'black' }}>
6) react-router-config <=> useRoutes
