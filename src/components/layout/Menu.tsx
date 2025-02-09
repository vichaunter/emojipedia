import { Link } from "react-router-dom";
import useEmojiStore from "../../stores/useEmojiStore";
import Tooltip from "../UI/Tooltip";

type MenuItem = {
  icon: string;
  label: string;
  link: string;
};

const menuItems: MenuItem[] = [{ icon: "🔍", label: "Home", link: "/" }];

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  const { categories } = useEmojiStore();

  return (
    <nav className="flex flex-col">
      <div className="mb-4">
        {menuItems.map((item) => (
          <Tooltip
            text={item.label}
            disabled={isOpen}
            key={item.label}
            position="right"
          >
            <Link
              to={item.link}
              className="p-2 hover:bg-gray-700 rounded flex items-center"
            >
              {item.icon} {isOpen && item.label}
            </Link>
          </Tooltip>
        ))}
      </div>
      {categories.map(({ name, emoji, slug }) => {
        return (
          <Tooltip text={name} disabled={isOpen} key={name} position="right">
            <Link
              to={`/category/${slug}`}
              className="p-2 hover:bg-gray-700 rounded flex items-center"
            >
              {emoji} {isOpen && name}
            </Link>
          </Tooltip>
        );
      })}
    </nav>
  );
};

export default Menu;
