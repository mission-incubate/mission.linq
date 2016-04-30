import * as gulp from 'gulp';
import {join} from 'path';
import { APP_SRC, DEV_DEST} from '../../config';
import * as util from 'gulp-util';

export = () => {
    let src = [
        join('./', APP_SRC, 'index.ts'),
        join('./', DEV_DEST, '', 'index.js')
    ];
    util.log(src);
    return gulp.src(src)
        .pipe(gulp.dest('./'));
}
