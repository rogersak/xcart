import {connect} from 'react-redux'
import Header from '../Componetns/Header/Header';

const mapStateToProps=state=>({
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(Header)