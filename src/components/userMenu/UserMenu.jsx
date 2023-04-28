import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>Hello mango@mail.com</p>
      <button className={css.btn}>Logout</button>
    </div>
  );
};

export default UserMenu;
