# Apostrophe Design System / Pattern Library

This bundle allows you to build design system, pattern library or just document your UI components directly in Apostrophe CMS v3 application. It comes with tools like layout nunjucks tags, color and typography presentation with auto-detection (fonts, contrast, etc) macros.

## Installation

From the root of your Apostrophe CMS v3 application:

```sh
npm i @corllete/apos-ds@alpha
```

## Publish the assets from the bundle

In development
```sh
node app @corllete/apos-ds-page-type:publish-assets
```

In production you need to explcitly set the node environment to production or Bad Things will happen.
```sh
NODE_ENV=production node app @corllete/apos-ds-page-type:publish-assets
```

### Integrate with your Apostrophe v3 application

> NOTE: the esiest way to see it in action and learn is running the [Demo app](https://github.com/corllete/apos-ds)

Let's suppose you have a local/npm module `theme` which contains your website UI componenets (macros, fragments and includes).
Open `app.js` and add:
```js
    '@corllete/apos-ds': {
      options: {
        modules: [ 'theme' ]
      }
    },
    '@corllete/apos-ds-page-type': {
      options: {
        // enable the built-in documentation - yes, in the form of stories
        docs: true
      }
    },
    // your imaginery components module
    theme: {},
    // The rest of your apostrophe configuration

```

Now you can start creating your design system documentation pages, create your component stories and potentially see stories from other developers (3rd pary apostrophe modules using the component documentation feature of the design system).

### Write your first story

Stories are declared and found by story configuratoins. The default pattern (can be changed from your app.js options) is `*.stories.js`.
Let's create a story configuration. Inside our imaginery module create `APOS_ROOT/modules/theme/views/buttons/buttons.stories.js` like this
```js
// modules/theme/views/buttons/buttons.stories.js
module.exports = {
  // Globaly unique!
  name: 'my-theme-buttons',
  label: 'Buttons',
  category: 'My Theme :: Buttons',
  stories: [
    {
      // Uniqie in the context of this file
      name: 'button',
      label: 'Button',
      // relative path to the story;
      // `.story.` is not required, just a convention;
      // the same with `.njk`
      template: 'buttons/button.story.njk',
      // one of complete | inreview | inprogress
      state: 'inreview'
    }
  ]
};
```

Now the story itself:
```njk
{# modules/theme/views/buttons/button.story.njk #}

{% extends dsPreview %}
{% import "theme:buttons/buttons.html" as buttons %}

{% block previewSimple %}
    {{ buttons.primary('Primary')  }}
    {{ buttons.secondary('Secondary')  }}
  </div>
{% endblock %}

{% block tagline %}
  The button variants.
{% endblock %}

{% block description %}
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Quae cum essent dicta, discessimus. Disserendi artem nullam habuit. 
    Quae contraria sunt his, malane? Dici enim nihil potest verius.
  </p>
{% endblock %}
```

You can add code examples, variants to showcase the different rendering options, any kind of additional details you need and somewhere in the future - the macro parameters documentation.

Your component is a regular nunjucks macro - a naive implementation:
```njk
{# modules/theme/views/buttons/buttons.html #}

{% macro primary(label) %}
  render(label, 'primary')
{% endmacro %}

{% macro secondary(label) %}
  render(label, 'secondary')
{% endmacro %}

{% macro render(label, type) %}
  <button class="theme-button theme-button--{{ type }}">
    <span class="theme-button__label">{{ label }}</span>
  </button>
{% endmacro %}
```

### Tip

If you wanna suppress the module docs listing but still see them in the navigation menu change your configuration like this
```js
    '@corllete/apos-ds': {
      options: {
        modules: [ 'theme' ]
      },
      categories: {
        add: {
          'ds-docs': {
            label: 'Docs',
            list: false
          }
        }
      }
    },
    '@corllete/apos-ds-page-type': {
      options: {
        docs: true
      }
    },
```

## Development

```sh
# Watch
npm run watch
# Build for development
npm run build
# Build for production
npm run build:prod
```
