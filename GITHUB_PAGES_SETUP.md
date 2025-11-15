# GitHub Pages 설정 가이드

## GitHub Actions 실행 후 해야 할 일

### 1. GitHub Pages 설정 활성화

1. 레포지토리로 이동: https://github.com/BowonLee/vibe_coding_test
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Deploy from a branch** 선택 (기본값)
   - 또는 **GitHub Actions** 선택 (권장)
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
   - **Save** 클릭

### 2. Actions 권한 설정 (필수)

1. **Settings** > **Actions** > **General** 이동
2. **Workflow permissions** 섹션에서:
   - ✅ **Read and write permissions** 선택
   - ✅ **Allow GitHub Actions to create and approve pull requests** 체크
3. **Save** 클릭

### 3. 배포 확인

1. **Actions** 탭으로 이동: https://github.com/BowonLee/vibe_coding_test/actions
2. 최신 워크플로 실행 확인:
   - ✅ 초록색 체크 = 성공
   - ❌ 빨간색 X = 실패 (로그 확인 필요)
3. 배포가 완료되면 약 1-2분 후 사이트 확인:
   - URL: https://bowonlee.github.io/vibe_coding_test/

### 4. 문제 해결

#### 배포가 실패하는 경우:
1. **Actions** 탭에서 실패한 워크플로 클릭
2. 에러 로그 확인
3. 일반적인 문제:
   - 권한 설정 누락 → 2번 단계 다시 확인
   - 빌드 에러 → 로컬에서 `npm run build` 테스트

#### Pages가 활성화되지 않는 경우:
- 레포지토리가 **Public**인지 확인
- **Settings** > **Pages**에서 Source가 올바르게 설정되었는지 확인
- Actions 권한이 올바르게 설정되었는지 확인

#### 사이트가 404를 보여주는 경우:
- URL이 올바른지 확인: `https://bowonlee.github.io/vibe_coding_test/`
- GitHub Actions가 성공적으로 완료되었는지 확인
- 브라우저 캐시 삭제 후 다시 시도

### 5. 자동 배포 확인

이제 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다:
```bash
git add .
git commit -m "Update landing page"
git push
```

푸시 후 **Actions** 탭에서 자동 배포 진행 상황을 확인할 수 있습니다.

