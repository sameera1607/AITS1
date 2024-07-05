import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
function dashBoard(props){
    const { userRole } =props;
    switch (userRole){
        case 'admin':
            return <AdminDashboard/>;
        case 'user':
            return <UserDashboard/>;
        default:
            return <div>Error:Invalid userRole</div>;
    }
}
export default dashBoard;