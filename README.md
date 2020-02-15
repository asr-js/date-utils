# Date Utils

*时间工具*

<br/>

## 安装

### npm

``` sh
npm install git+https://github.com/asr-js/date-utils.git#v1.0.0
```

### yarn

``` sh
yarn add git+https://github.com/asr-js/date-utils.git#v1.0.0
```

<br/>

## 简介

时间工具类，提供时间相关的操作。

<br/>

## 方法

### parseDate(time: number | string | Date): Date

#### 描述

转换为Date对象，同时解决Safari的时间创建问题。

#### 接收参数

- `time: number | string | Date` 时间戳、时间字符串、Date对象

#### 返回数据类型

`Date对象`

#### 演示

``` typescript
import { parseDate } from 'date-utils';

const date = parseDate("2019-01-01T00:00:00.000+0000");
console.log(date instanceof Date); // true
```

<br/>

### cleanTime(time: number | string | Date): Date

#### 描述

清空时间（时、分、秒、毫秒）信息。

### 接收参数

- `time: number | streing | Date` 时间戳、时间字符串、Date对象

#### 返回数据类型

`Date对象`

#### 演示

``` typescript
import { cleanTime } from 'date-utils';

const date = cleanTime("2019-01-01 13:01:12.001"); // 2019-01-01 00:00:00.000
```

<br/>

### formatDuration(millisecond: number): string

#### 描述

转换为持续时长。

### 接收参数

- `millisecond: number` 毫秒数

#### 返回数据类型

`时长字符串`

#### 演示

```typescript
import { formatDuration } from 'date-utils';

const str = formatDuration(2000); // 2秒
```

<br/>

### parseTime(time: number | string | Date, cFormat?: string): string

#### 描述

转换为时间字符串。

### 接收参数

- `time: number | streing | Date` 时间戳、时间字符串、Date对象
- `cFormat?: string` 格式化模板 '{y}-{m}-{d} {h}:{i}:{s} 星期{a}'

#### 返回数据类型

`时间字符串`

#### 演示

```typescript
import { parseTime } from 'date-utils';

const str = parseTime("2019-01-01 00:00:00", '{y}/{m}/{d}'); // 2019/1/1
```

<br/>

### formatTime(time: number | string | Date, cFormat?: string): string

#### 描述

格式化时间。

### 接收参数

- `time: number | streing | Date` 时间戳、时间字符串、Date对象
- `cFormat?: string` 格式化模板 '{y}-{m}-{d} {h}:{i}:{s} 星期{a}'

#### 返回数据类型

`时间字符串`

#### 演示

```typescript
import { formatTime } from 'date-utils';

const str1 = formatTime(Date.now()); // 刚刚
const str2 = formatTime(Date.now() - 60 * 1000); // 1分钟前
const str3 = formatTime(Date.now() - 24 * 60 * 60 * 1000); // 1天前
const str4 = formatTime(Date.now() - 2 * 24 * 60 * 60 * 1000); // m月d日h时i分
```

<br/>

### formatDate(time: number | string | Date): string

#### 描述

格式化日期。

### 接收参数

- `time: number | streing | Date` 时间戳、时间字符串、Date对象

#### 返回数据类型

`时间字符串`

#### 演示

```typescript
import { formatDate } from 'date-utils';

const str1 = formatDate(Date.now()); // h:i
const str2 = formatDate(Date.now() - 24 * 60 * 60 * 1000); // 昨天
const str3 = formatDate(Date.now() - 2 * 24 * 60 * 60 * 1000); // 前天
const str4 = formatDate(Date.now() - 3 * 24 * 60 * 60 * 1000); // [y-]m-d
```

