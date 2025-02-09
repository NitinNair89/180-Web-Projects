import { Site } from '@/types/site.type';
import { Link } from 'react-router-dom';
import './style.css';

export const Featured: React.FC<Site> = (props) => {
  return (
    <div className="card d-inline-block">
      <div className="card-header">
        <div className="text-primary text-bold card-title h5">
          Featured
        </div>
        <div>{props.title}</div>
      </div>
      <div className="card-body text-muted text-small">
        {props.description}
      </div>
      <div className="card-footer">
        <Link to={props.link} className="btn btn-primary">
          Visit
        </Link>
      </div>
    </div>
  );
};

{
  /* <div className="jumbotron">
	<span id="featured-span-head" className="text-white font-weight-bold">What's completed ?</span>
	<h3 className="animated fadeInDown">{{siteTitle}}</h3>
	<p className="lead animated fadeInUp">{{siteDesc}}</p>
	<hr className="my-4">
	<div className="d-flex justify-content-around align-items-center">
		<a className="btn btn-lg visitBtn" href="{{siteLink}}" role="button">visit</a>
		<p className="text-muted d-none d-sm-block">Latest Commit: <span style="color:teal;">{{siteCommit}}</span></p>
		<p className="text-muted d-none d-sm-block">
			Completed on: <span style="color:teal;">{{siteDate}}</span>
		</p>
	</div>
</div> */
}
