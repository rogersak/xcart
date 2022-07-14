import {connect} from 'react-redux'
import { addToCart , removeToCart } from '../Service/Actions/Action';
import Home from "../Componetns/Home/Home";

const mapStateToProps=state=>({
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;