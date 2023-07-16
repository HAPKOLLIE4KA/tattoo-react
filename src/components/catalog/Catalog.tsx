import React, { FC } from "react";
import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem";
import tattoKits from "../../assets/images/catalog-category/tattoo-kits.png";
const Catalog: FC = () => {
  return (
    <div className={styles.catalogContainer}>
      <div className={styles.catalogHeader}>
        <span className="txtHeaderBlock">Каталог</span>
      </div>
      <div className={styles.catalogBody}>
        <CatalogItem
          name="Тату наборы"
          onClick={() => console.log("clcik Тату наборы")}
        />
        <CatalogItem
          name="Держатели"
          onClick={() => console.log("clcik Держатели")}
        />
        <CatalogItem
          name="Тату машинки"
          onClick={() => console.log("clcik Тату машинки")}
        />
        <CatalogItem
          name="Педали и провода"
          onClick={() => console.log("clcik Педали и провода")}
        />
        <CatalogItem
          name="Краски"
          onClick={() => console.log("clcik Краски")}
        />
        <CatalogItem
          name="Блоки питания"
          onClick={() => console.log("clcik Блоки питания")}
        />
        <CatalogItem
          name="Наконечники"
          onClick={() => console.log("clcik Наконечники")}
        />
        <CatalogItem
          name="Тату иглы"
          onClick={() => console.log("clcik Тату иглы")}
        />
        <CatalogItem
          name="Защита, ёмкости, расходники"
          onClick={() => console.log("clcik Защита, ёмкости, расходники")}
        />
        <CatalogItem
          name="Аксессуары"
          onClick={() => console.log("clcik Аксессуары")}
        />
        <CatalogItem
          name="Принтеры и планшеты"
          onClick={() => console.log("clcik Принтеры и планшеты")}
        />
      </div>
    </div>
  );
};

export default Catalog;