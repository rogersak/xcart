import {connect} from 'react-redux'
import CartLeft from '../Componetns/cartLeft.js/cartLeft';
import { addToCart , removeToCart } from '../Service/Actions/Action';

const mapStateToProps=state=>({
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    removeToCartHandler:data=>dispatch(removeToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(CartLeft)