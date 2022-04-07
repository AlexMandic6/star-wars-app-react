import './link.css';

export default function Link(props) {
    const{url, title} = {...props.lnk};
    return <a className="navLink" href={url} target="_blank" rel="noreferrer">{title}</a>
};