import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Quality control',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Quality control',
          title: 'Quality control'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
