const gulp = require('gulp');
const unified = require('unified');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const doc = require('rehype-document');
const format = require('rehype-format');
const html = require('rehype-stringify');
const fs = require('fs');

const DEMO_LINKS = `

[Dropdown example](./examples/dropdown) | [Modal example](./examples/modal)

`;

gulp.task('render-readme:markdown', () => new Promise((ok, fail) => {
    const readme = fs.readFileSync('README.md')
        .toString()
        .replace('<!-- demo links here -->', DEMO_LINKS);
    unified()
    .use(markdown)
    .use(remark2rehype)
    .use(doc, {
        css: ['https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css', './style.css']
    })
    .use(format)
    .use(html)
    .process(readme, function (err, file) {
        if (err) {
            fail(err);
            return;
        }
        fs.writeFileSync('dist/index.html', String(file));
        ok();
    });
}));

gulp.task('render-readme:css', () => gulp.src('examples/style.css').pipe(gulp.dest('dist/')));

gulp.task('render-readme', ['render-readme:css', 'render-readme:markdown']);
