// import * as React from "react";
// import styles from "./ReactRedux.module.scss";
// import { IReactReduxProps, IReactReduxState } from "./IReactReduxProps";
// import { escape } from "@microsoft/sp-lodash-subset";

// export default class ReactRedux extends React.Component<
//   IReactReduxProps,
//   IReactReduxState,
//   {}
// > {
//   public render(): React.ReactElement<IReactReduxProps> {
//     return (
//       <div className={styles.reactRedux}>
//         <div className={styles.container}>
//           <div className={styles.row}>
//             <div className={styles.column}>
//               <span className={styles.title}>
//                 Welcome to SharePoint! {escape(this.props.description)}
//               </span>
//               <p className={styles.subTitle}>
//                 Customize SharePoint experiences using Web Parts.
//               </p>
//               <p className={styles.description}>
//                 {escape(this.props.description)}
//               </p>
//               <a href="https://aka.ms/spfx" className={styles.button}>
//                 <span className={styles.label}>Learn more</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
