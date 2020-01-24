create table pr_size
(
    size_id             int not null auto_increment,
    value               varchar(256) not null default 'No Size Specified',
    is_active           bit(1) default 1,
    primary key (size_id)
);

create table pr_color
(
    color_id            int not null auto_increment,
    color_value         varchar(256) not null default 'No color specified',
    is_active           bit(1) default 1,
    primary key(color_id)
);

create table pr_measurement_unit
(
    mes_unit_id         int not null auto_increment,
    unit                varchar(10),
    is_active           bit(1) default 1,
    primary key (mes_unit_id)
);

create table pr_dimension
(
    dimension_id        int not null auto_increment,
    mes_unit_id         int not null default 0,
    dimension_value     char(10) not null default 'No Value',
    is_active           bit(1) default 1,
    primary key (dimension_id),
    foreign key (mes_unit_id) references pr_measurement_unit (mes_unit_id)
); 

create table pr_product_features
(
   product_features_id  int not null auto_increment,
   brand_id             int not null default 0,
   color_id             int not null default 0,
   size_id              int not null default 0,
   dimension_id         int not null default 0,
   is_active            bit(1)  default 1,
   primary key (product_features_id),
   foreign key (brand_id)   references pr_brands(brand_id),
   foreign key (color_id)   references pr_color(color_id),
   foreign key (size_id)    references pr_size(size_id),
   foreign key (dimension_id)   references pr_dimension(dimension_id)
);

create table product
(
   product_id           int not null auto_increment,
   product_name         varchar(256) not null default 'No product name specified',
   
   is_active            bit(1) default 1,
   primary key (product_id)
);

create table pr_product_feature_applicability 
(
   product_feature_applicability_id int(11) NOT NULL AUTO_INCREMENT,
   product_id int(11) NOT NULL DEFAULT '0',
   product_feature_id int(11) NOT NULL DEFAULT '0',
   dated_from datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
   dated_thru datetime NOT NULL DEFAULT '9999-12-30 00:00:00',
   is_active bit(1) NOT NULL DEFAULT b'1',
   primary key (product_feature_applicability_id),
   key product_id (product_id),
   key pr_product_feature_idx (product_feature_id),
   constraint pr_product_feature FOREIGN KEY (product_feature_id) REFERENCES           pr_product_features (product_features_id) ON DELETE CASCADE ON UPDATE CASCADE,
   constraint pr_product_feature_applicability_ibfk_1 FOREIGN KEY (product_id)  REFERENCES product (Product_id)
);