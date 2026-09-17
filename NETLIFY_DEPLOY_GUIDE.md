# Netlify 배포 안내

- npm ci
- npm run build
- 빌드 명령: npm run build
- 배포 폴더: .next
- Node.js: 22
- Netlify의 기존 Next.js Runtime 유지

package.json은 next build를 사용합니다. 기존 Sites용 build-verified.sh나 validate-artifact.sh는 Netlify 빌드에 사용하지 않습니다.
tsconfig.json은 examples, db, worker, build 및 Vite/Drizzle 설정 파일을 검사 대상에서 제외합니다.

## 이번 수정
방문자 상품: 로얄형 월 37만원 / 노블형 월 19만원 / 엘리트형 월 10만원.
일평균 방문자: 각각 2,000명 / 1,000명 / 300명. 기존 체류시간 설명 유지.
포스팅: 500자 15,000원 / 1,000자 30,000원 / 1,500자 35,000원 / 2,000자 40,000원 (건당).
기존 VAT 별도 및 최소 10건 진행 기준 유지.

## 기존 GitHub 저장소 적용
교체파일 압축본의 경로를 유지하여 같은 이름의 파일을 교체하세요.
app/page.tsx, app/globals.css, tsconfig.json, package.json, netlify.toml, next.config.ts가 포함됩니다.
마지막 세 파일은 기존 Netlify 설정 보존을 위해 함께 포함했습니다.
GitHub 저장 후 Netlify 자동 배포 결과를 확인하세요. 이번 작업에서는 로컬 Next.js 빌드 및 타입 검사가 통과했으며 원격 저장소나 공개 사이트에 업로드하지 않았습니다.
