import React from "react"

export default function ConditionalClasses(props) {
  const ModalA = (props) => (
    <div className={props.visible ? "active" : ""}>{props.children}</div>
  );

  const ModalB = props => (
    <div style={{ display: props.visible ? "block" : "none" }}>
      {props.children}
    </div>
  )
  return (
    <>
      <h1>Conditional Classes</h1>
      <Modal>Hello!</Modal>
    </>
  );
}


// export default function ConditionalClasses(props) {
//     const Modal = ({ isVisible, children }) => {
//         return (
//             <div className={isVisible ? "active" : "off"}>
//                 {children}
//             </div>
//         );
//     };

//     return (
//         <div>
//             <Modal isVisible={props.isVisible}> TEST!
//             </Modal>
//         </div>
//     );
// }