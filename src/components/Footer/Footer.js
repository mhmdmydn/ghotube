import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-light mt-4 border-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg text-center py-3">
                        <p>&copy; copyright {new Date().getFullYear()} | built with <FcLike /> by. <a href="https://github.com/mhmdmydn/">Muhammad Mayudin</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;