import ReactLoading from 'react-loading';
import './loading.scss';

function Loading() {
    return (
        <div className="loading">
        <ReactLoading type="balls" color="#009dae" height={'70px'} width={'100px'} />    
        </div>
    );
}

export default Loading;