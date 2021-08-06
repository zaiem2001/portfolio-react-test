import "./listitem.css";

export default function Listitem(props) {
  return (
    <li
      className={props.active ? "portfolio active" : "portfolio"}
      onClick={() => {
        props.set(prev =>{
            return props.id
        });
      }}
    >
      {props.title}
    </li>
  );
}
