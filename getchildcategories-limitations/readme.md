# getChildCategories limitations

Чтобы снять ограничение на отображение не более 10 позиций в подменю UMI.CMS
с демомаркетом (Demomarket) необходимо в файле `/templates/php/library/DemomarketPhpExtension.php`
внутри функции `getChildCategories(array $parentData)` изменить значение переменной `$limit`.

```
public function getChildCategories(array $parentData) {
  ...
  $limit = 10;
}
```
