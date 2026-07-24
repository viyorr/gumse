# 금새인터랙티브 블로그 성장 제안서

현재 공개된 랜딩페이지를 다른 호스팅과 도메인에서 운영할 수 있도록 정리한 Next.js 프로젝트입니다.

## 1. 로컬에서 확인하기

Node.js 22 LTS 설치 후 프로젝트 폴더에서 실행합니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 2. 주요 수정 위치

- 전체 콘텐츠: `app/page.tsx`
- 색상·폰트·반응형 디자인: `app/globals.css`
- 링크 제목·설명·카카오 미리보기: `app/layout.tsx`
- 투명 배경 로고: `public/gumse-logo-transparent.png`
- 카카오/SNS 미리보기: `public/og-blog-growth.png`

## 3. 새 주소 반영하기

배포 서비스의 환경 변수에 아래 값을 등록합니다.

```text
NEXT_PUBLIC_SITE_URL=https://실제로-사용할-주소
```

이 값을 설정하면 카카오톡, SNS 미리보기의 대표 주소도 새 도메인으로 적용됩니다.

## 4. 가장 쉬운 무료 배포: Vercel

Vercel의 무료 Hobby 요금제와 기본 서브도메인을 이용하는 방법입니다.

1. GitHub에 새 저장소를 만들고 이 폴더의 파일을 업로드합니다.
2. `vercel.com`에서 GitHub 계정으로 가입합니다.
3. **Add New → Project**에서 저장소를 선택합니다.
4. Framework Preset은 **Next.js**, Build Command는 `npm run build`를 사용합니다.
5. Environment Variables에 다음 값을 추가합니다.
   - 이름: `NEXT_PUBLIC_SITE_URL`
   - 값: 먼저 발급될 예상 주소 또는 최초 배포 후 확인한 `https://프로젝트명.vercel.app`
6. Deploy를 누릅니다.
7. 최초 배포 후 실제 주소가 달라졌다면 환경 변수 값을 수정하고 Redeploy합니다.

`프로젝트명.vercel.app` 주소는 무료이며 별도의 도메인 구매가 필요하지 않습니다.

## 5. Netlify 무료 서브도메인 사용

1. GitHub에 프로젝트를 업로드합니다.
2. `app.netlify.com`에서 **Add new site → Import an existing project**를 선택합니다.
3. 저장소를 연결하고 Next.js 설정을 자동 감지하도록 둡니다.
4. 환경 변수 `NEXT_PUBLIC_SITE_URL`에 발급받을 `https://사이트명.netlify.app` 주소를 입력합니다.
5. 배포 후 **Domain management → Options → Edit site name**에서 무료 주소 앞부분을 변경할 수 있습니다.

## 6. 보유한 독립 도메인 연결

독립 도메인 자체는 일반적으로 연간 구매 비용이 발생합니다. 이미 보유한 도메인이 있다면 Vercel 또는 Netlify의 무료 호스팅에 연결하는 비용은 없습니다.

### Vercel

1. 프로젝트의 **Settings → Domains**로 이동합니다.
2. 사용할 도메인을 입력합니다.
3. 화면에 표시되는 A 또는 CNAME 레코드를 도메인 구매처의 DNS 관리 화면에 등록합니다.
4. 연결 완료 후 `NEXT_PUBLIC_SITE_URL`을 새 도메인으로 변경하고 재배포합니다.

### Netlify

1. **Domain management → Add a domain**에서 도메인을 입력합니다.
2. 안내되는 CNAME 또는 DNS 레코드를 도메인 구매처에 등록합니다.
3. 연결 완료 후 환경 변수의 주소를 새 도메인으로 변경하고 재배포합니다.

두 서비스 모두 연결이 완료되면 HTTPS 인증서를 무료로 자동 발급합니다.

## 7. 카카오톡 미리보기 갱신

도메인이나 미리보기 이미지를 변경한 후에도 예전 내용이 보이면 카카오 공유 디버거에서 새 주소의 OG 캐시를 초기화해야 합니다.

https://developers.kakao.com/tool/debugger/sharing

초기화 후 기존 채팅방이 아닌 새 채팅방에서 링크를 다시 전송해 확인합니다.

## 8. 배포 전 확인

```bash
npm install
npm run build
```

빌드가 정상 완료되면 배포할 수 있습니다.
