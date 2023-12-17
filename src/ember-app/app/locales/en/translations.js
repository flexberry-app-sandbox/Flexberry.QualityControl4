import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISQualityControlДолжностьLForm from './forms/i-i-s-quality-control-должность-l';
import IISQualityControlОборудованиеLForm from './forms/i-i-s-quality-control-оборудование-l';
import IISQualityControlОтчетLForm from './forms/i-i-s-quality-control-отчет-l';
import IISQualityControlПродукцияLForm from './forms/i-i-s-quality-control-продукция-l';
import IISQualityControlСотрудникLForm from './forms/i-i-s-quality-control-сотрудник-l';
import IISQualityControlДолжностьEForm from './forms/i-i-s-quality-control-должность-e';
import IISQualityControlОборудованиеEForm from './forms/i-i-s-quality-control-оборудование-e';
import IISQualityControlОтчетEForm from './forms/i-i-s-quality-control-отчет-e';
import IISQualityControlПродукцияEForm from './forms/i-i-s-quality-control-продукция-e';
import IISQualityControlСотрудникEForm from './forms/i-i-s-quality-control-сотрудник-e';
import IISQualityControlДолжностьModel from './models/i-i-s-quality-control-должность';
import IISQualityControlОборудованиеModel from './models/i-i-s-quality-control-оборудование';
import IISQualityControlОтчетModel from './models/i-i-s-quality-control-отчет';
import IISQualityControlПроверяемоеModel from './models/i-i-s-quality-control-проверяемое';
import IISQualityControlПродукцияModel from './models/i-i-s-quality-control-продукция';
import IISQualityControlСотрудникModel from './models/i-i-s-quality-control-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-quality-control-должность': IISQualityControlДолжностьModel,
    'i-i-s-quality-control-оборудование': IISQualityControlОборудованиеModel,
    'i-i-s-quality-control-отчет': IISQualityControlОтчетModel,
    'i-i-s-quality-control-проверяемое': IISQualityControlПроверяемоеModel,
    'i-i-s-quality-control-продукция': IISQualityControlПродукцияModel,
    'i-i-s-quality-control-сотрудник': IISQualityControlСотрудникModel
  },

  'application-name': 'Quality control',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Quality control',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Quality control',
          title: 'Quality control'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'контроль-качества': {
          caption: 'Контроль качества',
          title: 'Контроль качества',
          'i-i-s-quality-control-оборудование-l': {
            caption: 'Оборудование',
            title: ''
          },
          'i-i-s-quality-control-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-quality-control-продукция-l': {
            caption: 'Продукция',
            title: ''
          },
          'i-i-s-quality-control-отчет-l': {
            caption: 'Отчет',
            title: ''
          },
          'i-i-s-quality-control-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-quality-control-должность-l': IISQualityControlДолжностьLForm,
    'i-i-s-quality-control-оборудование-l': IISQualityControlОборудованиеLForm,
    'i-i-s-quality-control-отчет-l': IISQualityControlОтчетLForm,
    'i-i-s-quality-control-продукция-l': IISQualityControlПродукцияLForm,
    'i-i-s-quality-control-сотрудник-l': IISQualityControlСотрудникLForm,
    'i-i-s-quality-control-должность-e': IISQualityControlДолжностьEForm,
    'i-i-s-quality-control-оборудование-e': IISQualityControlОборудованиеEForm,
    'i-i-s-quality-control-отчет-e': IISQualityControlОтчетEForm,
    'i-i-s-quality-control-продукция-e': IISQualityControlПродукцияEForm,
    'i-i-s-quality-control-сотрудник-e': IISQualityControlСотрудникEForm
  },

});

export default translations;
