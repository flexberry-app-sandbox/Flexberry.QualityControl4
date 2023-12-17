import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.контроль-качества.caption'),
          title: i18n.t('forms.application.sitemap.контроль-качества.title'),
          children: [{
            link: 'i-i-s-quality-control-оборудование-l',
            caption: i18n.t('forms.application.sitemap.контроль-качества.i-i-s-quality-control-оборудование-l.caption'),
            title: i18n.t('forms.application.sitemap.контроль-качества.i-i-s-quality-control-оборудование-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-quality-control-должность-l',
            caption: i18n.t('forms.application.sitemap.контроль-качества.i-i-s-quality-control-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.контроль-качества.i-i-s-quality-control-должность-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-quality-control-продукция-l',
            caption: i18n.t('forms.application.sitemap.контроль-качества.i-i-s-quality-control-продукция-l.caption'),
            title: i18n.t('forms.application.sitemap.контроль-качества.i-i-s-quality-control-продукция-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-quality-control-отчет-l',
            caption: i18n.t('forms.application.sitemap.контроль-качества.i-i-s-quality-control-отчет-l.caption'),
            title: i18n.t('forms.application.sitemap.контроль-качества.i-i-s-quality-control-отчет-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-quality-control-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.контроль-качества.i-i-s-quality-control-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.контроль-качества.i-i-s-quality-control-сотрудник-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})