import {connect} from 'react-redux'
import Cart from '../Pages/Cart/Cart';

const mapStateToProps=state=>({
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Cart)